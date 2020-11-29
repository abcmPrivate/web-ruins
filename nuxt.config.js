export default {
  srcDir: 'src/',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'web-ruins',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap',
      },
    ],
  },

  target: 'static',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['modern-css-reset', { src: '~assets/scss/base/index.scss', lang: 'scss' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/firebase'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/dotenv'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-basic-auth-module',
  ],

  // basic auth (https://github.com/potato4d/nuxt-basic-auth-module#readme)
  basic: {
    name: 'yes',
    pass: 'sushi',
    message: 'password hint: 管理人の好きな日本食(ローマ字で五文字)',
    enabled: true,
    match({ url }) {
      return (url || '').startsWith('/ura/contents');
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  styleResources: {
    scss: ['./assets/scss/variables/index.scss', './assets/scss/mixins/index.scss'],
  },
};
