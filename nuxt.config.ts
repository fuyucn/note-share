// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	srcDir: './src',
	modules: [
		'@unocss/nuxt',
	],
  experimental: {
    reactivityTransform: true
  },
	unocss: {
    // presets
    wind: true, // enabled `@unocss/preset-wind`
    icons: true, // enabled `@unocss/preset-icons`
    // core options
    shortcuts: [],
    rules: [],
  },
})
