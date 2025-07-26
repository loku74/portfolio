<script lang="ts">
	import Terminal from '$lib/components/Terminal.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';

	const debug = !true;
</script>

<div
	id="home"
	class="bg flex min-h-screen flex-col items-center bg-linear-300 from-indigo-500 via-red-400 to-purple-500"
	style=""
>
	<Navbar {debug} />
	<Terminal {debug} />
</div>
<div
	id="skills"
	class="flex max-h-screen flex-col items-center justify-center bg-app-neutral py-32 {debug
		? 'border border-red-500'
		: ''}"
>
	<Skills />
</div>
<div id="projects" class="flex min-h-screen flex-col items-center justify-center bg-app-dark">
	<Projects />
</div>
<footer
	class="mt-auto flex items-center justify-center gap-16 border-t border-app-border bg-app-dark py-4"
>
	<button onclick={() => window.open('https://github.com/loku74')}>
		<img
			src="https://devicon-website.vercel.app/api/github/original.svg?color=%23F5F5F5"
			alt="Github logo"
			class="w-10 cursor-pointer"
		/>
	</button>
	<button
		onclick={() => window.open('https://www.linkedin.com/in/lo%C3%AFc-bourniquel-a99987203/')}
	>
		<img
			src="https://devicon-website.vercel.app/api/linkedin/plain.svg?color=%23F5F5F5"
			alt="LinkedIn logo"
			class="w-10 cursor-pointer"
		/>
	</button>
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
