<script lang="ts">
	import Terminal from '$lib/components/Terminal.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Skills from '$lib/components/Skills.svelte';

	const debug = !true;
</script>

<div
	id="terminal"
	class="bg flex min-h-screen flex-col items-center bg-linear-300 from-indigo-500 via-red-400 to-purple-500"
	style=""
>
	<Navbar {debug} />
	<Terminal {debug} />
</div>
<div
	id="skills"
	class="flex max-h-screen flex-col items-center justify-center bg-app-dark py-32 {debug
		? 'border border-red-500'
		: ''}"
>
	<Skills />
</div>
<div id="education" class="flex min-h-screen items-center justify-center bg-app-bg-light">
	<h2 class="text-4xl font-bold text-white">Education Section</h2>
</div>
<div id="experience" class="flex min-h-screen items-center justify-center bg-app-neutral">
	<h2 class="text-4xl font-bold text-white">Experience Section</h2>
</div>
<div id="projects" class="flex min-h-screen items-center justify-center bg-app-light">
	<h2 class="text-4xl font-bold text-white">Projects Section</h2>
</div>

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
