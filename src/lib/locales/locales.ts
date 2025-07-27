import { derived, writable } from 'svelte/store';

import { projects_en, projects_fr } from '$lib/data/projects';

export const currentLocale = writable('us');
export const lang = derived([currentLocale], ([currentLocale]) => {
	return locales[currentLocale as keyof typeof locales];
});

export const locales = {
	us: {
		navbar: {
			home: 'Home',
			skills: 'Skills',
			projects: 'Projects',
			contact: 'Contact'
		},
		terminal: {
			developer: 'Developer',
			graduate: 'Future graduate of the school',
			download: 'download'
		},
		skills: {
			web: 'Web development',
			low_level: 'Low-level dev.',
			high_level: 'High-level dev.',
			title: 'What are my skills ?',
			description:
				"At 42, I've done multiple different projects, from a C library to a fully functional single-page application. The project-based\
				learning approach has allowed me to develop a wide range of skills, including self learning & autonomy, problem-solving, teamwork, and communication.\
				I am passionate about creating innovative and well-designed solutions that can make a positive impact on people's lives.",
			web_description:
				'I have a solid experience with HTML, CSS, JavaScript, and TypeScript. I am also familiar with known frameworks such as Vue, Svelte or Tailwind. \
				These skills have allowed me to create responsive and user-friendly websites that are optimized for performance and accessibility.',
			low_level_description:
				"I have a solid knowledge of C and C++, as most of the 42 common core projects are done in both of theses languages. I'm also familiar with UNIX based operating systems\
				and system programming: system calls, threads, signals, pipes, sockets, networking etc...",
			high_level_description:
				'I am familiar with high-level programming languages such as Python, Java and Javascript.\
			I have most experience with Python & Javascript and some of their frameworks (django REST framework, Vue & Svelte), acquired through personal projects and professional experience.\
		 '
		},
		projects: {
			title: 'Projects',
			list: projects_en
		}
	},
	fr: {
		navbar: {
			home: 'Accueil',
			skills: 'Compétences',
			projects: 'Projets',
			contact: 'Contact'
		},
		terminal: {
			developer: 'Développeur',
			graduate: "Futur diplômé de l'école",
			download: 'télécharger'
		},
		skills: {
			web: 'Développement web',
			low_level: 'Dev. bas niveau',
			high_level: 'Dev. haut niveau',
			title: 'Quelles sont mes compétences ?',
			description:
				"À 42, j'ai réalisé plusieurs projets différents, allant de librairies en C à des applications web.\
				L'apprentissage par projet m'a permis de développer une large gamme de compétences, notamment en matière d'autonomie & d'auto-apprentissage, de résolution de problèmes, de collaboration et de communication.\
				Je suis passionné par la création de solutions innovantes et bien conçues qui peuvent avoir un impact positif sur la vie des gens.",
			web_description:
				"J'ai une solide expérience en HTML, CSS, JavaScript et TypeScript.\
				Je suis également familier avec des frameworks populaires tels que Vue, Svelte et Tailwind.\
				Ces compétences m'ont permis de créer des sites web 'responsive' et 'user-friendly' qui sont optimisés pour la performance et l'accessibilité.",
			low_level_description:
				"J'ai une bonne maîtrise en C & C++, car la plupart des projets du tronc commun de 42 sont réalisés dans ces deux langages. Je suis également familiarisé \
				avec les systèmes d'exploitation basés sur UNIX et la programmation système : appels système, threads, signaux, pipes, sockets, réseaux, etc...",
			high_level_description:
				"Je suis familier avec les langages de programmation de haut niveau tels que Python, Java et Javascript.\
			J'ai le plus d'expérience avec Python & Javascript et certains de leurs frameworks (django REST framework, Vue & Svelte), acquise au travers de projets personnels et d'expériences professionnelles."
		},
		projects: {
			title: 'Mes projets',
			list: projects_fr
		}
	}
};
