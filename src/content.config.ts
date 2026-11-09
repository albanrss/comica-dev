import { defineCollection, z } from "astro:content";

/**
 * Content collections — the config files that hold projects,
 * experiences, and posts.
 *
 * - projects     -> JSON/YAML files in `src/content/projects/`
 * - experiences  -> JSON/YAML files in `src/content/experiences/`
 * - posts        -> Markdown/MDX files in `src/content/posts/`
 *
 * The `accent` field picks a pastel color from the design sheet:
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
		featured: z.boolean().default(false),
		accent,
	}),
});

const experiences = defineCollection({
	type: "data",
	schema: z.object({
		role: z.string(),
		company: z.string(),
		start: z.string(), // e.g. "2021-03"
		end: z.string().optional(), // omit for "Present"
		description: z.string(),
		stack: z.array(z.string()).default([]),
		accent,
	}),
});

const posts = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { projects, experiences, posts };
