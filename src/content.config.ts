import { defineCollection, z } from "astro:content";

/**
 * Collections de contenu — les fichiers de configuration qui alimentent
 * tout le contenu du site.
 *
 * - projects      -> fichiers JSON/YAML dans `src/content/projects/`
 * - experiences   -> fichiers JSON/YAML dans `src/content/experiences/`
 * - skills        -> fichiers JSON/YAML dans `src/content/skills/`
 * - education     -> fichiers JSON/YAML dans `src/content/education/`
 * - volunteering  -> fichiers JSON/YAML dans `src/content/volunteering/`
 *
 * Le champ `accent` choisit une couleur pastel de la charte graphique :
 * "blue" | "pink" | "green" | "grey".
 */

const accent = z.enum(["blue", "pink", "green", "grey"]).default("grey");

const projects = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		year: z.number().int().optional(),
		link: z.string().url().optional(),
		repo: z.string().url().optional(),
		stack: z.array(z.string()).default([]),
		accent,
	}),
});

const experiences = defineCollection({
	type: "data",
	schema: z.object({
		role: z.string(),
		company: z.string(),
		start: z.string(), // ex. "2021-03"
		end: z.string().optional(), // omettre pour "Présent"
		description: z.string(),
		stack: z.array(z.string()).default([]),
		accent,
	}),
});

const skills = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		items: z.array(z.string()).default([]),
		order: z.number().int().default(0),
		accent,
	}),
});

const education = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		start: z.string(), // ex. "2023"
		end: z.string().optional(), // omettre pour "Présent"
		detail: z.string(),
		accent,
	}),
});

const volunteering = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		year: z.number().int(),
		order: z.number().int().default(0),
		accent,
	}),
});

export const collections = {
	projects,
	experiences,
	skills,
	education,
	volunteering,
};
