<script lang="ts">
	import ProjectSection from './ProjectSection.svelte';
	import projects from '$lib/data/projects';
</script>

{#each projects as project (project.id)}
	<div
		class="flex w-full flex-col items-center border-y border-app-border {project.id % 2 == 1
			? 'bg-app-neutral'
			: 'bg-app-bg-dark'}"
	>
		{#if project.id == 0}
			<h1
				class="jb-mono pt-20 text-6xl font-medium text-app-text-neutral underline underline-offset-4"
			>
				Projects
			</h1>
		{/if}
		<ProjectSection
			project_title={project.name}
			project_note={project.note}
			badges={project.badges}
			text={project.text}
			mutedText={project.mutedText}
			preview_images={project.preview_images}
			github_url={project.github_url}
			reversed={project.id % 2 == 1}
		/>
	</div>
{/each}
