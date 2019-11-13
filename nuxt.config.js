
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: ':: Lucid :: Contact List',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { name: 'description', content : 'Lucid Bootstrap 4.1.1 Admin Template' },
      { name: 'author', content : 'WrapTheme, design by: ThemeMakker.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/x-icon' },
      { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/vendor/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/vendor/sweetalert/sweetalert.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: '/css/color_skins.css' },
    ],
    script: [
      {src : '/bundles/libscripts.bundle.js'},
      {src : '/bundles/vendorscripts.bundle.js'},
      {src : '/vendor/sweetalert/sweetalert.min.js'},
      {src : '/bundles/mainscripts.bundle.js'},
      {src : '/js/pages/ui/dialogs.js'},
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
