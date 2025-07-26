import dvtool_preview_1 from '$lib/images/dvtool_1.webp';
import dvtool_preview_2 from '$lib/images/dvtool_2.webp';
import dvtool_preview_3 from '$lib/images/dvtool_3.webp';

import cub_preview_1 from '$lib/images/cub_1.webp';
import cub_preview_2 from '$lib/images/cub_2.webp';
import cub_preview_3 from '$lib/images/cub_3.webp';

import irc_preview_1 from '$lib/images/irc_1.webp';
import irc_preview_2 from '$lib/images/irc_2.webp';
import irc_preview_3 from '$lib/images/irc_3.webp';

import tsd_preview_1 from '$lib/images/tsd_1.webp';
import tsd_preview_2 from '$lib/images/tsd_2.webp';
import tsd_preview_3 from '$lib/images/tsd_3.webp';
import tsd_preview_4 from '$lib/images/tsd_4.webp';
import tsd_preview_5 from '$lib/images/tsd_5.webp';

import solong_preview_1 from '$lib/images/solong_1.webp';
import solong_preview_2 from '$lib/images/solong_2.webp';
import solong_preview_3 from '$lib/images/solong_3.webp';
import solong_preview_4 from '$lib/images/solong_4.webp';

type ProjectData = {
	id: number;
	name: string;
	note: string;
	text: string;
	mutedText?: string;
	badges: string[];
	preview_images: string[];
	github_url?: string | null;
};

const projects: ProjectData[] = [
	{
		id: 0,
		name: 'DVTool',
		note: 'Done during an intership at STMicroelectronics',
		text: 'This project aims to build a convenient software to help microcontroller engineers analyze, visualize and compare their results. The main goal and purpose of this project was to unify data from two different teams, one designing and simulating microncontrollers, the other one testing them in real condition.',
		mutedText: 'AG-Grid and AG-Charts (Enterprise version) were used for the data grid and charts.',
		badges: ['python', 'sveltejs', 'typescript', 'tailwindcss'],
		preview_images: [dvtool_preview_1, dvtool_preview_2, dvtool_preview_3],
		github_url: null
	},
	{
		id: 1,
		name: 'cub3d',
		note: 'School project',
		text: 'This project consists of rendering a 3D environment in C using the MiniLibX graphics library. The main goal of this project was to learn about raycasting, a "simple" way to render a 3D scene, yet revolutionary back in the days.',
		mutedText:
			'MiniLibX is a tiny graphics library which allows you to do the most basic things for rendering something in screens without any knowledge of X-Window and Cocoa. Done with another student.',
		badges: ['c'],
		preview_images: [cub_preview_1, cub_preview_2, cub_preview_3],
		github_url: 'https://github.com/loku74/42_cursus/tree/master/cub3D'
	},
	{
		id: 2,
		name: 'ft_irc',
		note: 'School project',
		text: 'This project requires developing an IRC server in C++98. The server handles multiple clients concurrently using non-blocking I/O. It supports user authentication, nicknames, channels, private messages, and operator commands like KICK, INVITE, TOPIC, and MODE.',
		mutedText:
			'Not all IRC commands were built as the project itself only required the most essential features to be implemented. Done with 2 other students.',
		badges: ['c', 'cpp'],
		preview_images: [irc_preview_1, irc_preview_2, irc_preview_3],
		github_url: 'https://github.com/loku74/42_cursus/tree/master/ft_irc/ircserv'
	},
	{
		id: 3,
		name: 'ft_transcendence',
		note: 'School project',
		text: 'This project requires creating a website with several features such as authentication, user profiles, live chat and more... but most importantly a 1v1 pong game. It is a Dockerized, single-page application using VueJS with typescript for the frontend and NestJS for the backend.',
		mutedText:
			'It is clearly not the best looking and functional website (yet it is responsive and mobile ready!) but we learned a lot. Done with 2 other students.',
		badges: ['vuejs', 'typescript', 'nestjs', 'docker'],
		preview_images: [tsd_preview_1, tsd_preview_2, tsd_preview_3, tsd_preview_4, tsd_preview_5],
		github_url:
			'https://github.com/Ratinax/ft_transcendence/tree/778d5f28fb0a5152c44994d9f131c7391b94b226'
	},
	{
		id: 4,
		name: 'so_long',
		note: 'School project',
		text: 'This project involves creating a basic 2D game in C using the MiniLibX graphics library. The objective is to move a character with WASD keys to collect all items on a map and then reach the exit. The program parses a valid .ber map file that is rectangular and enclosed by walls (1).',
		mutedText:
			'MiniLibX is a tiny graphics library which allows you to do the most basic things for rendering something in screens without any knowledge of X-Window and Cocoa.',
		badges: ['c'],
		preview_images: [solong_preview_1, solong_preview_2, solong_preview_3, solong_preview_4],
		github_url: 'https://github.com/loku74/42_cursus/tree/master/so_long'
	}
];

export default projects;
