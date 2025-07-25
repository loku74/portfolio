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
	class="my-auto flex w-full max-w-6xl flex-col rounded-xl bg-app-neutral shadow-2xl/100 outline-1 outline-black {debug
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
		<div class="flex gap-2">
			<img
				alt="Svelte Logo"
				class="w-6"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
			/>
			<h3 class="text-app-text-muted">~/dev/my-portfolio</h3>
		</div>
	</div>
	<div class="jb-mono px-2 py-3 text-app-text-neutral">
		<p>Last login: {lastVisit} on ttys000</p>
		<TerminalCommand command="ls -a" paddingTop={false} />
		<div class="grid grid-cols-6 gap-y-2">
			<span class="text-purple-400">.</span>
			<span class="text-purple-400">..</span>
			<span class="text-purple-400">content</span>
			<span class="text-purple-400">src</span>
			<span class="text-purple-400">node_modules</span>
			<span>.git</span>
			<span>package.json</span>
			<span>svelte.config.js</span>
		</div>

		<TerminalCommand command="cd content/" />
		<TerminalCommand command="ls" paddingTop={false} />

		<div class="grid grid-cols-6 gap-y-2">
			<span class="text-purple-400">projects</span>
			<span class="text-cyan-300">CV_FR</span>
			<span class="text-cyan-300">CV_EN</span>
			<span>profile.txt</span>
		</div>
		<TerminalCommand command="cat profile.txt" />
		<div
			class="z-20 flex items-center justify-center gap-32 px-16 {debug
				? 'border border-blue-500'
				: ''}"
		>
			<div class="inter jb-mono flex flex-col shadow-white">
				<div class="mb-4 text-app-text-neutral">
					<h1 class="ml-2 text-6xl">Loïc</h1>
					<h1 class="text-6xl">BOURNIQUEL</h1>
				</div>
				<h3 class="ml-4 text-xl text-app-text-muted">
					{$_.terminal.graduate}
					<a
						class="cursor-pointer text-green-400 underline underline-offset-3"
						href="https://42.fr/en/homepage/">42</a
					>
				</h3>
				<h2 class="mx-auto mt-8 flex gap-2 text-2xl text-app-text-neutral">
					{$_.terminal.developer}
					<span class="text-orange-300 {$currentLocale === 'us' ? '-order-1' : ''}">
						<TypeWriter typeSpeed={100} texts={['Python', 'C', 'C++', 'Web']} />
					</span>
				</h2>
			</div>
			<img src={lbourniq} alt="Loic's portrait" class="w-64 rounded-full" />
		</div>

		<TerminalCommand command="chmod +x CV_EN CV_FR" paddingTop={false} />
		<TerminalCommand command="./CV_EN && ./CV_FR" paddingTop={false} />
		<div class="mt-2 flex gap-8">
			{#snippet downloadButton(filename: string)}
				<a
					href="/documents/{filename}"
					download={filename}
					class="inline-block cursor-pointer rounded border border-app-border bg-app-light px-4 py-2 text-center no-underline hover:bg-app-hover active:bg-app-light"
				>
					{$_.terminal.download} <span class="text-orange-400">{filename}</span>
				</a>
			{/snippet}

			{@render downloadButton('CV_EN.pdf')}
			{@render downloadButton('CV_FR.pdf')}
		</div>
	</div>
</div>
