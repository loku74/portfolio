<script lang="ts">
	import Terminal from '$lib/components/Terminal.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';

	const debug = !true;
</script>

<div
	id="home"
	class="bg flex flex-col items-center bg-linear-300 from-indigo-500 via-red-400 to-purple-500 sm:min-h-screen"
	style=""
>
	<Navbar {debug} />
	<Terminal {debug} />
</div>
<div
	id="skills"
	class="flex flex-col items-center justify-center bg-app-neutral py-12 lg:py-24 xl:max-h-screen xl:py-32 {debug
		? 'border border-red-500'
		: ''}"
>
	<Skills />
</div>
<div id="projects">
	<Projects />
</div>
<footer
	class="mt-auto flex items-center justify-center gap-16 border-t border-app-border bg-app-dark py-4"
>
	<a href="https://github.com/loku74" rel="noopener noreferrer">
		<img
			src="https://devicon-website.vercel.app/api/github/original.svg?color=%23F5F5F5"
			alt="Github logo"
			class="w-10 cursor-pointer"
		/>
	</a>
	<a href="https://www.linkedin.com/in/lo%C3%AFc-bourniquel-a99987203/" rel="noopener noreferrer">
		<img
			src="https://devicon-website.vercel.app/api/linkedin/plain.svg?color=%23F5F5F5"
			alt="LinkedIn logo"
			class="w-10 cursor-pointer"
		/>
	</a>
</footer>

<style>
	.bg {
		background-size: 500% 500%;
		animation: gradient 20s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 100%;
		}
		25% {
			background-position: 100% 0%;
		}
		50% {
			background-position: 0% 0%;
		}
		75% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0% 100%;
		}
	}
</style>
