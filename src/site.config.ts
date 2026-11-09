/**
 * Site configuration — the single source of truth for identity,
 * navigation, social links, and the sections rendered on the homepage.
 *
 * Add or reorder sections by editing the `sections` array below.
 * Each entry maps to a component in `src/components/sections/`.
 */

export type SectionType =
	| "hero"
	| "about"
	| "projects"
	| "experience"
	| "contact";

export interface NavLink {
	label: string;
	href: string;
}

export interface SocialLink {
	label: string;
	href: string;
}

export interface SiteConfig {
	name: string;
	role: string;
	tagline: string;
	description: string;
	location: string;
	email: string;
	bio: string;
	nav: NavLink[];
	socials: SocialLink[];
	sections: SectionType[];
}

export const site: SiteConfig = {
	name: "Alban Roussée",
	role: "Software Engineer",
	tagline: "Building thoughtful, accessible web and software experiences.",
	description: "Personal portfolio",
	location: "Osaka, Japan",
	email: "alban.roussee@epitech.eu",
	bio: "",
	nav: [
		{ label: "Projects", href: "#projects" },
		{ label: "Experience", href: "#experience" },
		{ label: "Contact", href: "#contact" },
	],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/alban-roussee" },
    { label: "Github", href: "https://github.com/albanrss" },
	],
	sections: ["hero", "about", "projects", "experience", "contact"],
};
