<script lang="ts">
	let props = $props();

	let badge: string = props.badge;

	const badges: Record<string, { img: string; alt: string; text: string }> = {
		python: {
			img: 'https://devicon-website.vercel.app/api/python/original.svg',
			alt: 'Python logo',
			text: 'Python'
		},
		c: {
			img: 'https://devicon-website.vercel.app/api/c/original.svg',
			alt: 'C logo',
			text: 'C'
		},
		cpp: {
			img: 'https://devicon-website.vercel.app/api/cplusplus/original.svg',
			alt: 'C++ logo',
			text: 'C++'
		},
		sveltejs: {
			img: 'https://devicon-website.vercel.app/api/svelte/original.svg',
			alt: 'Svelte logo',
			text: 'Svelte'
		},
		tailwindcss: {
			img: 'https://devicon-website.vercel.app/api/tailwindcss/plain.svg',
			alt: 'Tailwind CSS logo',
			text: 'Tailwind'
		},
		typescript: {
			img: 'https://devicon-website.vercel.app/api/typescript/original.svg',
			alt: 'TypeScript logo',
			text: 'TypeScript'
		},
		nestjs: {
			img: 'https://devicon-website.vercel.app/api/nestjs/plain.svg',
			alt: 'NestJS logo',
			text: 'NestJS'
		},
		docker: {
			img: 'https://devicon-website.vercel.app/api/docker/original.svg',
			alt: 'Docker logo',
			text: 'Docker'
		},
		vuejs: {
			img: 'https://devicon-website.vercel.app/api/vuejs/original.svg',
			alt: 'VueJS logo',
			text: 'VueJS'
		}
	};
</script>

<div
	class="bg-app-light app-border outline-app-dark flex w-fit items-center justify-between rounded-md px-2 py-1 outline-1"
>
	<img src={badges[badge].img} alt={badges[badge].alt} class="w-5" />
	<span class="pl-1.5 font-medium">
		{badges[badge].text}
	</span>
</div>
