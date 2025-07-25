<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import 'flag-icons/css/flag-icons.min.css';

	import formatDate from '$lib/utils/formatDate';
	import { currentLocale, lang as _ } from '$lib/locales/locales';

	let { debug } = $props();

	let currentTime: string[] = $state([]);
	let interval: number = 0;
	let isFixed = $state(false);
	let scrollY = $state(0);
	let activeSection = $state('terminal');

	const navItems = $derived([
		{ id: 'terminal', label: $_.navbar.home, class: 'font-mono font-bold' },
		{ id: 'skills', label: $_.navbar.skills, class: '' },
		{ id: 'education', label: $_.navbar.education, class: '' },
		{ id: 'experience', label: $_.navbar.experience, class: '' },
		{ id: 'projects', label: $_.navbar.projects, class: '' }
	]);

	function scrollToSection(sectionId: string) {
		if (!browser) return;

		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}

	function updateTime() {
		const now = new Date().getTime();
		let tempTime = formatDate(now, false);
		currentTime = tempTime.split(' ');
	}

	function handleScroll() {
		if (!browser) return;
		scrollY = window.scrollY;
		isFixed = scrollY > 56;

		const sections = ['terminal', 'skills', 'education', 'experience', 'projects'];
		for (const sectionId of sections) {
			const element = document.getElementById(sectionId);
			if (element) {
				const rect = element.getBoundingClientRect();
				const viewportCenter = window.innerHeight / 2;
				if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
					activeSection = sectionId;
					break;
				}
			}
		}
	}

	onMount(() => {
		updateTime();
		interval = setInterval(updateTime, 1000);

		if (browser) {
			window.addEventListener('scroll', handleScroll);
			handleScroll(); // Set initial state
		}
	});

	onDestroy(() => {
		clearInterval(interval);
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});

	const availableLanguages = ['FR', 'US'];
	const languagesRecord: Record<string, { label: string; class: string }> = {
		US: { label: 'English (US)', class: 'us' },
		FR: { label: 'Français', class: 'fr' }
	};

	function setLanguage(language: string) {
		if (availableLanguages.includes(language)) {
			selectedLanguage = language;
			currentLocale.set(language.toLowerCase());
		}
	}

	let selectedLanguage = $state('US');
</script>

<div
	class="fixed top-0 right-0 left-0 z-50 flex items-center gap-1.5 text-sm text-white transition-all duration-400 ease-out {debug
		? 'border border-green-500'
		: ''}"
	style="
		transform: {isFixed ? 'translateY(.5rem)' : 'translateY(0) scale(1)'};
		margin: {isFixed ? '0 2rem' : '0'};
		border-radius: {isFixed ? '0.5rem' : '0'};
		padding: {isFixed ? '0.75rem 1rem' : '0.375rem 1rem'};
		background: {isFixed ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.3)'};
		backdrop-filter: {isFixed ? 'blur(12px)' : 'none'};
		box-shadow: {isFixed ? '0 8px 32px rgba(0, 0, 0, 0.4)' : 'none'};
	"
>
	<img
		alt="Background"
		src="https://devicon-website.vercel.app/api/svelte/plain.svg?color=%23FFFFFF"
		class="mr-1 w-5"
	/>
	{#each navItems as item (item.id)}
		<button
			class="nav-button {item.class} {activeSection === item.id ? 'nav-button-active' : ''}"
			onclick={() => scrollToSection(item.id)}
		>
			{item.label}
		</button>
	{/each}
	<div class="ml-auto flex items-center gap-1.5">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="nav-button flex items-center gap-1.5">
				<span class="fi fi-{languagesRecord[selectedLanguage].class}"></span>
				{selectedLanguage}</DropdownMenu.Trigger
			>
			<DropdownMenu.Content
				class="mt-2 mr-24 w-42 border border-app-border/70 bg-white/70 text-app-dark backdrop-blur"
				align="start"
				preventScroll={false}
			>
				<DropdownMenu.Label class="text-app-neutral">Choose language</DropdownMenu.Label>
				<DropdownMenu.Separator class="bg-app-border/70" />
				<DropdownMenu.Group class="px-1.5 py-1">
					{#each availableLanguages as language, index (index)}
						<DropdownMenu.Item
							onSelect={() => setLanguage(language)}
							class="py-1 hover:bg-black/20"
						>
							<span class="fi fi-{languagesRecord[language].class}"></span>{languagesRecord[
								language
							].label}
						</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		<div class="nav-button">
			<svg
				width="18px"
				height="18px"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M0 7L1.17157 5.82843C2.98259 4.01741 5.43884 3 8 3C10.5612 3 13.0174 4.01742 14.8284 5.82843L16 7L14.5858 8.41421L13.4142 7.24264C11.9783 5.8067 10.0307 5 8 5C5.96928 5 4.02173 5.8067 2.58579 7.24264L1.41421 8.41421L0 7Z"
						fill="#ffffff"
					></path>
					<path
						d="M4.24264 11.2426L2.82843 9.82843L4 8.65685C5.06086 7.59599 6.49971 7 8 7C9.50029 7 10.9391 7.59599 12 8.65686L13.1716 9.82843L11.7574 11.2426L10.5858 10.0711C9.89999 9.38527 8.96986 9 8 9C7.03014 9 6.1 9.38527 5.41421 10.0711L4.24264 11.2426Z"
						fill="#ffffff"
					></path>
					<path
						d="M8 15L5.65685 12.6569L6.82842 11.4853C7.13914 11.1746 7.56057 11 8 11C8.43942 11 8.86085 11.1746 9.17157 11.4853L10.3431 12.6569L8 15Z"
						fill="#ffffff"
					></path>
				</g></svg
			>
		</div>
		<div class="nav-button flex gap-1">
			{#each currentTime as str, index (index)}
				<span class={index + 1 == currentTime.length ? 'ml-1' : ''}>
					{str}
				</span>
			{/each}
		</div>
	</div>
</div>
