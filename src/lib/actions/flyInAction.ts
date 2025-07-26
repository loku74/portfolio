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

// CSS easing function approximation for cubic-bezier
function getCSSEasing(easingName: string): string {
	switch (easingName) {
		case 'quintOut':
			return 'cubic-bezier(0.23, 1, 0.32, 1)';
		default:
			return 'ease-out';
	}
}

export function flyIn(node: HTMLElement, options: FlyInOptions = {}) {
	const { threshold = 0.5, direction = 'up', duration = 1000, distance = 50, delay = 0 } = options;

	let hasAnimated = false;

	// Set initial state
	node.style.opacity = '0';
	const savedTransform = node.style.transform;
	const savedTransition = node.style.transition;
	node.style.transform = getInitialTransform(direction, distance);
	node.style.transition = `opacity ${duration}ms ${getCSSEasing('quintOut')}, transform ${duration}ms ${getCSSEasing('quintOut')}`;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting && !hasAnimated) {
				setTimeout(() => {
					node.style.opacity = '1';
					node.style.transform = 'translate(0, 0)';
					hasAnimated = true;
				}, delay);
				node.style.transform = savedTransform;
				node.style.transition = savedTransition;
				observer.unobserve(node);
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		},
		update(newOptions: FlyInOptions) {
			// Handle option updates if needed
			Object.assign(options, newOptions);
		}
	};
}
