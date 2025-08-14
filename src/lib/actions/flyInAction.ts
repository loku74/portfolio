interface FlyInOptions {
	threshold?: number;
	direction?: 'up' | 'down' | 'left' | 'right';
	duration?: number;
	distance?: number;
	delay?: number;
}

function getInitialTransform(direction: string, distance: number): string {
	switch (direction) {
		case 'up':
			return `translateY(${distance}px)`;
		case 'down':
			return `translateY(-${distance}px)`;
		case 'left':
			return `translateX(${distance}px)`;
		case 'right':
			return `translateX(-${distance}px)`;
		default:
			return `translateY(${distance}px)`;
	}
}

export function flyIn(node: HTMLElement, options: FlyInOptions = {}) {
	const {
		threshold = 0.33,
		direction = 'up',
		duration = 1000,
		distance = 100,
		delay = 0
	} = options;

	const savedTransform = node.style.transform;
	const savedTransition = node.style.transition;

	node.style.opacity = '0';
	node.style.transform = getInitialTransform(direction, distance);

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					node.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms cubic-bezier(0.23, 1, 0.32, 1)`;
					node.style.transform = 'translate(0, 0)';
					node.style.opacity = '1';
				}, delay);
				setTimeout(
					() => {
						node.style.transition = savedTransition;
						node.style.transform = savedTransform;
					},
					duration + delay + 42
				);
				observer.unobserve(node);
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
