// @ts-check
import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://comica.dev",
	integrations: [mdx(), sitemap()],
	env: {
		schema: {
			CONTACT_EMAIL: envField.string({ context: "server", access: "secret" }),
			CONTACT_PHONE: envField.string({ context: "server", access: "secret" }),
		},
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	// Pas besoin de KV : la session est gérée côté client / en mémoire.
	// On surcharge le driver par défaut de l'adapter Cloudflare (qui, lui,
	// configurerait automatiquement un namespace Workers KV "SESSION").
	session: {
		driver: "memory",
	},
});
