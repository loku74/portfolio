import dvtool_1 from '$lib/images/projects/dvtool_1.webp';
import dvtool_2 from '$lib/images/projects/dvtool_2.webp';
import dvtool_3 from '$lib/images/projects/dvtool_3.webp';

import cub_1 from '$lib/images/projects/cub_1.webp';
import cub_2 from '$lib/images/projects/cub_2.webp';
import cub_3 from '$lib/images/projects/cub_3.webp';

import irc_1 from '$lib/images/projects/irc_1.webp';
import irc_2 from '$lib/images/projects/irc_2.webp';
import irc_3 from '$lib/images/projects/irc_3.webp';

import tsd_1 from '$lib/images/projects/tsd_1.webp';
import tsd_2 from '$lib/images/projects/tsd_2.webp';
import tsd_3 from '$lib/images/projects/tsd_3.webp';
import tsd_4 from '$lib/images/projects/tsd_4.webp';
import tsd_5 from '$lib/images/projects/tsd_5.webp';

import solong_1 from '$lib/images/projects/solong_1.webp';
import solong_2 from '$lib/images/projects/solong_2.webp';
import solong_3 from '$lib/images/projects/solong_3.webp';
import solong_4 from '$lib/images/projects/solong_4.webp';

type ProjectData = {
	id: number;
	name: string;
	note: string;
	text: string;
	mutedText?: string;
	badges: string[];
	images: string[];
	github_url?: string | null;
};

export const projects_en: ProjectData[] = [
	{
		id: 0,
		name: 'DVTool',
		note: 'Done during an intership at STMicroelectronics',
		text: 'This project aims to build a convenient software to help microcontroller engineers analyze, visualize and compare their results. The main goal and purpose of this project was to unify data from two different teams, one designing and simulating microncontrollers, the other one testing them in real condition.',
		mutedText:
			'AG-Grid and AG-Charts (Enterprise version) were used for the data grid and some of the charts.',
		badges: ['python', 'sveltejs', 'typescript', 'tailwindcss'],
		images: [dvtool_1, dvtool_2, dvtool_3],
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
		images: [cub_1, cub_2, cub_3],
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
		images: [irc_1, irc_2, irc_3],
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
		images: [tsd_1, tsd_2, tsd_3, tsd_4, tsd_5],
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
		images: [solong_1, solong_2, solong_3, solong_4],
		github_url: 'https://github.com/loku74/42_cursus/tree/master/so_long'
	}
];

export const projects_fr: ProjectData[] = [
	{
		id: 0,
		name: 'DVTool',
		note: "Réalisé lors d'un stage chez STMicroelectronics",
		text: "Ce projet vise à créer un logiciel pratique pour aider les ingénieurs en microcontrôleurs à analyser, visualiser et comparer leurs résultats. L'objectif principal de ce projet était d'unifier les données de deux équipes différentes, l'une concevant et simulant des microcontrôleurs, l'autre les testant en conditions réelles.",
		mutedText:
			"AG-Grid et AG-Charts (version enterprise) ont été utilisés pour l'affichae des données et de certains graphiques.",
		badges: ['python', 'sveltejs', 'typescript', 'tailwindcss'],
		images: [dvtool_1, dvtool_2, dvtool_3],
		github_url: null
	},
	{
		id: 1,
		name: 'cub3d',
		note: "Projet d'école",
		text: "Ce projet consiste à créer un environnement 3D en C en utilisant la bibliothèque graphique MiniLibX. L'objectif principal de ce projet était d'apprendre le raycasting, une façon \"simple\" de rendre une scène 3D, mais révolutionnaire à l'époque.",
		mutedText:
			"MiniLibX est une petite bibliothèque graphique qui permet de faire les choses les plus basiques pour afficher quelque chose à l'écran sans aucune connaissance de X-Window et Cocoa. Réalisé avec un autre étudiant.",
		badges: ['c'],
		images: [cub_1, cub_2, cub_3],
		github_url: 'https://github.com/loku74/42_cursus/tree/master/cub3D'
	},
	{
		id: 2,
		name: 'ft_irc',
		note: "Projet d'école",
		text: "Ce projet nécessite de développer un serveur IRC en C++98. Le serveur gère plusieurs clients simultanément en utilisant des I/O non-bloquants. Il prend en charge l'authentification des utilisateurs, les pseudonymes, les canaux, les messages privés et les commandes d'opérateur comme KICK, INVITE, TOPIC et MODE.",
		mutedText:
			'Pas toutes les commandes IRC ont été implémentées car le projet lui-même ne nécessitait que les fonctionnalités les plus essentielles. Réalisé avec 2 autres étudiants.',
		badges: ['c', 'cpp'],
		images: [irc_1, irc_2, irc_3],
		github_url: 'https://github.com/loku74/42_cursus/tree/master/ft_irc/ircserv'
	},
	{
		id: 3,
		name: 'ft_transcendence',
		note: "Projet d'école",
		text: "Ce projet nécessite de créer un site web avec plusieurs fonctionnalités telles que l'authentification, les profils utilisateur, le chat en direct et plus encore... mais surtout un jeu de pong 1v1. C'est une application monopage dockerisée utilisant VueJS avec TypeScript pour le frontend et NestJS pour le backend.",
		mutedText:
			"Ce n'est clairement pas le site web le plus beau et fonctionnel (mais il est responsive et 'mobile-ready' !) mais nous avons beaucoup appris. Réalisé avec 2 autres étudiants.",
		badges: ['vuejs', 'typescript', 'nestjs', 'docker'],
		images: [tsd_1, tsd_2, tsd_3, tsd_4, tsd_5],
		github_url:
			'https://github.com/Ratinax/ft_transcendence/tree/778d5f28fb0a5152c44994d9f131c7391b94b226'
	},
	{
		id: 4,
		name: 'so_long',
		note: "Projet d'école",
		text: "Ce projet consiste à créer un jeu 2D basique en C en utilisant la bibliothèque graphique MiniLibX. L'objectif est de déplacer un personnage avec les touches ZQSD pour collecter tous les objets sur une carte puis atteindre la sortie. Le programme prend en entrée une carte qui est un fichier en fomrat .ber valide, rectangulaire et entouré de murs (1).",
		mutedText:
			"MiniLibX est une petite bibliothèque graphique qui permet de faire les choses les plus basiques pour afficher quelque chose à l'écran sans aucune connaissance de X-Window et Cocoa.",
		badges: ['c'],
		images: [solong_1, solong_2, solong_3, solong_4],
		github_url: 'https://github.com/loku74/42_cursus/tree/master/so_long'
	}
];
