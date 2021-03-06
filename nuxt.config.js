import { gallerys } from './assets/data/gallerys.json'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/reset.css',
    '~/assets/css/common.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      plugins: {
        'postcss-custom-properties': {},
        'postcss-custom-media': {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
    // extend(config, ctx) {}
  },
  generate: {
    routes() {
      let result = []
      const gallerysTagRoutes = () => {
        const galleryTagPath = gallerys.reduce(
          (acc, val) => {
            const paths = val.tag.map((tag) => {
              const shapingTag = encodeURI(tag)

              return `/gallery/${shapingTag}/`
            })
            return [...acc, ...paths]
          },
          ['/gallery/']
        )

        return Array.from(new Set(galleryTagPath))
      }

      const galleryRoutes = () => {
        return gallerys.map((item) => {
          return `/gallery/detail/${item.id}/`
        })
      }

      result = [...result, ...gallerysTagRoutes(), ...galleryRoutes()]

      return result
    }
  }
}
