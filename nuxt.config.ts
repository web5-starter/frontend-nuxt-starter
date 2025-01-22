import lodashImports from 'lodash-imports'

const lodash = lodashImports({ hasFrom: true })

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt'
  ],

  css: [
    '@unocss/reset/tailwind.css'
  ],

  imports: {
    dirs: [
      'composables/**'
    ],
    imports: [
      ...lodash.imports
    ]
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  typescript: {
    tsConfig: {
      include: []
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
