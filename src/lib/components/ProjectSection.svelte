<script lang="ts">
	import Badge from '$lib/components/Badge.svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	import { flyIn } from '$lib/actions/flyInAction';

	let {
		project_title,
		project_note,
		badges,
		text,
		mutedText,
		github_url = null,
		preview_images,
		reversed = false
	} = $props();

	let openModal = $state(false);
	let selectedIndex = $state(0);
</script>

<div
	use:flyIn
	class="max-w-7xl rounded-xl px-2 py-16 text-app-text-neutral"
	id={`project-${project_title}`}
>
	<div class="flex items-center">
		<h2 class="jb-mono text-5xl font-medium text-orange-300 {reversed ? 'order-[1]' : ''}">
			{project_title}
		</h2>

		{#if github_url}
			<a
				href={github_url}
				rel="noopener noreferrer"
				aria-label="Open GitHub repository"
				class="cursor-pointer {reversed ? 'mr-auto' : 'ml-auto'}"
			>
				<i class="devicon-github-original text-4xl"></i>
			</a>
		{/if}
	</div>
	<div class="mt-6 flex flex-col gap-12 lg:grid lg:grid-cols-4 xl:grid-cols-5">
		<Carousel.Root
			opts={{ loop: true }}
			plugins={[Autoplay({ delay: 10000 })]}
			class="{reversed ? 'order-[1]' : ''}  lg:col-span-2 xl:col-span-3"
		>
			<Carousel.Content class="">
				{#each preview_images as image, index (index)}
					<Carousel.Item class="">
						<button
							class="group relative block cursor-pointer bg-transparent"
							onclick={() => {
								openModal = true;
								selectedIndex = index;
							}}
						>
							<img
								src={image}
								alt="Project Screenshot"
								class="rounded transition-opacity duration-200 group-hover:opacity-50"
							/>
							<div
								class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								<span class="rounded-md bg-app-neutral px-4 py-2 text-app-text-neutral">
									Click to expand
								</span>
							</div>
						</button>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
		<div class="col-span-5 flex flex-col text-lg lg:col-span-2">
			<p class="mb-2 text-orange-300 italic">{project_note}</p>
			<p>{text}</p>
			{#if mutedText}
				<p class="my-4 text-app-text-muted">{mutedText}</p>
			{/if}
			<div class="mt-auto flex flex-wrap gap-2">
				{#each badges as badge, index (index)}
					<Badge {badge} />
				{/each}
			</div>
		</div>
	</div>
</div>

{#if openModal}
	<button
		onclick={() => {
			openModal = false;
		}}
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
	>
		<Carousel.Root
			opts={{ startIndex: selectedIndex, loop: true }}
			class="w-[80%] max-w-[1600px]"
			onclick={(event) => {
				event.stopPropagation();
			}}
		>
			<Carousel.Content>
				{#each preview_images as image, index (index)}
					<Carousel.Item>
						<img src={image} alt="Project Screenshot" />
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</button>
{/if}
