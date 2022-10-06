// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: './src',
  modules: [
    '@unocss/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
  },
  unocss: {
    preflight: true,
    // presets
    wind: true, // enabled `@unocss/preset-wind`
    icons: true, // enabled `@unocss/preset-icons`
    // core options
    shortcuts: [
      { btn: 'px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm min-w-16' },
    ],
    rules: [],
  },
})
