<script lang="ts">
	import { onMount } from 'svelte';
	import formatDate from '$lib/utils/formatDate';

	import { lang as _, currentLocale } from '$lib/locales/locales';

	import TerminalCommand from '$lib/components/TerminalCommand.svelte';
	import { TypeWriter } from 'svelte-typewrite';

	import lbourniq from '$lib/images/lbourniq.jpg';

	const { debug } = $props();

	let lastVisit: string = $state('');

	onMount(() => {
		function setLastVisit() {
			localStorage.setItem('lastVisit', Date.now().toString());
		}

		function getLastVisit() {
			const lastVisit = localStorage.getItem('lastVisit');
			return lastVisit ? parseInt(lastVisit) : null;
		}

		const last_visit = getLastVisit();
		if (last_visit) {
			lastVisit = formatDate(last_visit);
		}
		setLastVisit();
	});
</script>

<div
	class="mx-4 my-16 flex flex-col rounded-xl bg-app-neutral shadow-2xl/100 outline-1 outline-black transition-all duration-200 sm:my-auto md:w-3xl lg:w-5xl xl:w-6xl {debug
		? 'border border-red-500'
		: 'border border-app-border'}"
>
	<div
		class="outline-b-2 relative flex items-center justify-center rounded-t-xl border-b border-app-border bg-app-neutral py-3 outline-black"
	>
		<div class="absolute left-4 flex gap-2">
			<div class="h-3 w-3 rounded-full bg-red-500"></div>
			<div class="h-3 w-3 rounded-full bg-amber-400"></div>
			<div class="h-3 w-3 rounded-full bg-green-500"></div>
		</div>
		<div class="flex items-center gap-2">
			<img
				alt="Svelte Logo"
				class="w-5 sm:w-6"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
			/>
			<h3 class="text-sm text-app-text-muted">~/dev/my-portfolio</h3>
		</div>
	</div>
	<div class="jb-mono px-2 py-3 text-app-text-neutral">
		<p class="hidden md:inline">Last login: {lastVisit} on ttys000</p>
		<TerminalCommand command="ls -a" paddingTop={false} />
		<div class="grid grid-cols-3 gap-y-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
			<span class="text-purple-400">.</span>
			<span class="text-purple-400">..</span>
			<span class="text-purple-400">content</span>
			<span class="text-purple-400">src</span>
			<span class="hidden text-purple-400 md:inline">node_modules</span>
			<span>.git</span>
			<span class="hidden md:inline">package.json</span>
			<span class="hidden md:inline">svelte.config.js</span>
		</div>

		<TerminalCommand command="cd content/" />
		<TerminalCommand command="ls" paddingTop={false} />

		<div class="grid grid-cols-3 gap-y-2 md:grid-cols-6">
			<span class="hidden text-purple-400 sm:inline">projects</span>
			<span class="text-cyan-300">CV_FR</span>
			<span class="text-cyan-300">CV_EN</span>
			<span>profile.txt</span>
		</div>
		<TerminalCommand command="cat profile.txt" />
		<div
			class="z-20 flex items-center justify-center gap-8 py-4 md:gap-32 md:px-16 {debug
				? 'border border-blue-500'
				: ''}"
		>
			<div class="inter jb-mono flex flex-col shadow-white">
				<div class="mb-4 text-3xl text-app-text-neutral sm:text-5xl lg:text-6xl">
					<h1 class="ml-2">Loïc</h1>
					<h1>BOURNIQUEL</h1>
				</div>
				<h3 class="ml-4 text-app-text-muted sm:text-xl">
					{$_.terminal.graduate}
					<a
						class="cursor-pointer text-green-400 underline underline-offset-3"
						href="https://42.fr/en/homepage/">42</a
					>
				</h3>
				<h2 class="mx-auto mt-8 flex gap-2 text-app-text-neutral sm:text-lg md:text-2xl">
					{$_.terminal.developer}
					<span class="text-orange-300 {$currentLocale === 'us' ? '-order-1' : ''}">
						<TypeWriter typeSpeed={100} texts={['Python', 'C', 'C++', 'Web']} />
					</span>
				</h2>
			</div>
			<img src={lbourniq} alt="Loic's portrait" class="w-32 rounded-full sm:w-48 md:w-64" />
		</div>

		<div class="hidden md:block">
			<TerminalCommand command="chmod +x CV_EN CV_FR" paddingTop={false} />
		</div>
		<TerminalCommand command="./CV_EN && ./CV_FR" paddingTop={false} />
		<div class="mt-2 flex gap-8">
			{#snippet downloadButton(filename: string)}
				<a
					href="/documents/{filename}"
					download={filename}
					class="inline-block cursor-pointer rounded border border-app-border bg-app-light px-4 py-2 text-center text-sm no-underline hover:bg-app-hover active:bg-app-light sm:text-lg"
				>
					{$_.terminal.download} <span class="text-orange-400">{filename}</span>
				</a>
			{/snippet}

			{@render downloadButton('CV_EN.pdf')}
			{@render downloadButton('CV_FR.pdf')}
		</div>
	</div>
</div>
