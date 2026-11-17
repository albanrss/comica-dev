/**
 * Configuration du site — source unique de vérité pour l'identité,
 * la navigation, les liens sociaux et les sections de la page d'accueil.
 *
 * Le contenu éditorial (projets, expériences, compétences, formation,
 * bénévolat) vit dans les collections de `src/content/`.
 * Ajoutez ou réordonnez les sections en éditant le tableau `sections`.
 *
 * Les données personnelles (email, téléphone) sont lues depuis les variables
 * d'environnement définies dans `astro.config.mjs` et ne sont jamais
 * commitées : voir `.env.example`.
 */

export type SectionType =
	| "hero"
	| "about"
	| "projects"
	| "experience"
	| "skills"
	| "education"
	| "volunteering"
	| "contact";

export interface NavLink {
	label: string;
	href: string;
}

export interface SocialLink {
	label: string;
	href: string;
}

export interface CvLink {
	href: string;
	label: string;
	shortLabel: string;
	fileName: string;
}

export interface CtaLink {
	label: string;
	href: string;
}

export interface SectionConfig {
	type: SectionType;
	title?: string;
}

export interface SiteConfig {
	name: string;
	role: string;
	tagline: string;
	description: string;
	location: string;
	email: string;
	phone: string;
	bio: string;
	availability: string;
	cv: CvLink;
	heroCta: CtaLink;
	nav: NavLink[];
	socials: SocialLink[];
	sections: SectionConfig[];
}

export const site: SiteConfig = {
	name: "Alban Roussée",
	role: "Développeur Fullstack",
	tagline:
		"Je conçois et développe des expériences web et logicielles réfléchies, accessibles et utiles.",
	description: "Portfolio d'Alban Roussée, développeur fullstack.",
	location: "Nantes, France",
	email: "",
	phone: "",
	bio: "Étudiant en informatique à Epitech (4e année, en échange à l'Université d'Osaka), je développe des applications web, mobiles et logicielles, du backend au frontend. Curieux et polyvalent, j'aime autant le DevOps, l'embarqué que la sécurité.",
	availability:
		"Disponible pour un stage de 6 mois — de septembre 2027 à février 2028.",
	cv: {
		href: "/cv.pdf",
		label: "Télécharger le CV",
		shortLabel: "CV",
		fileName: "Alban-Roussee-CV.pdf",
	},
	heroCta: {
		label: "Voir mes projets",
		href: "#projets",
	},
	nav: [
		{ label: "Projets", href: "#projets" },
		{ label: "Expérience", href: "#experience" },
		{ label: "Compétences", href: "#competences" },
		{ label: "Contact", href: "#contact" },
	],
	socials: [
		{ label: "LinkedIn", href: "https://linkedin.com/in/alban-roussee" },
		{ label: "GitHub", href: "https://github.com/albanrss" },
	],
	sections: [
		{ type: "hero" },
		{ type: "about", title: "À propos" },
		{ type: "projects", title: "Projets" },
		{ type: "experience", title: "Expérience" },
		{ type: "skills", title: "Compétences" },
		{ type: "education", title: "Formation" },
		{ type: "volunteering", title: "Bénévolat" },
		{ type: "contact", title: "Contact" },
	],
};
