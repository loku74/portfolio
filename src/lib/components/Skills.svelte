<script lang="ts">
	import { lang as _ } from '$lib/locales/locales';
	import web_dev_svg from '$lib/images/svg/web_dev.svg';
	import low_level_svg from '$lib/images/svg/low_level.svg';
	import high_level_svg from '$lib/images/svg/high_level.svg';

	import { flyIn } from '$lib/actions/flyInAction';

	const skills = $derived([
		{
			id: 0,
			title: $_.skills.web,
			description: $_.skills.web_description,
			icon: web_dev_svg
		},
		{
			id: 1,
			title: $_.skills.low_level,
			description: $_.skills.low_level_description,
			icon: low_level_svg
		},
		{
			id: 2,
			title: $_.skills.high_level,
			description: $_.skills.high_level_description,
			icon: high_level_svg
		}
	]);
</script>

<div use:flyIn>
	<h2 class="inter pb-8 text-center text-3xl text-app-text-neutral lg:text-5xl">
		{$_.skills.title}
	</h2>
	<p class="inter max-w-6xl px-4 pb-6 text-justify text-app-text-muted lg:text-lg">
		{$_.skills.description}
	</p>
</div>
<div
	class="flex flex-col flex-wrap justify-evenly gap-x-6 gap-y-8 px-4 pt-4 md:flex-row lg:flex-nowrap lg:justify-baseline lg:gap-x-8"
>
	{#each skills as skill (skill.id)}
		<div
			use:flyIn={{ direction: 'up', distance: 100, delay: skill.id * 150 }}
			class="app-border flex max-w-[400px] flex-col items-center rounded-lg bg-app-bg-lighter px-8 py-6
	shadow-lg shadow-white/20 duration-200 hover:scale-[104%] hover:bg-white lg:px-12 lg:py-8"
		>
			<img src={skill.icon} alt="Skill SVG Icon" />
			<h4 class="jb-mono py-4 text-center text-2xl text-app-dark">{skill.title}</h4>
			<p class="inter text-justify text-app-light lg:text-lg">{skill.description}</p>
		</div>
	{/each}
</div>
