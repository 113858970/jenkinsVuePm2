module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'xxx',
    meta: [
      { charset: 'utf-8' },
      // iOS启用WebApp模式
      { hid: 'apple-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      // UC强制竖屏
      { hid: 'uc-orientation', name: 'screen-orientation', content: 'portrait' },
      // UC强制全屏
      { hid: 'uc-full-screen', name: 'full-screen', content: 'yes' },
      // UC应用模式
      { hid: 'uc-brosermode', name: 'browermode', content: 'application' },
      // QQ强制竖屏
      { hid: 'x5-orientation', name: 'x5-orientation', content: 'portrait' },
      // QQ强制全屏
      { hid: 'x5-fullscreen', name: 'x5-fullscreen', content: 'true' },
      // 开启QQ应用模式
      { hid: 'x5-mode', name: 'x5-page-mode', content: 'app' },
      { hid: 'description', name: 'description', content: 'xxx' },
      { hid: 'keywords', name: 'keywords', content: '车主APP' }
    ],
    script: [
      { innerHTML: `!(function(a,b){function c(){var b=f.getBoundingClientRect().width;b/i>540&&(b=540*i);var c=b/10;(f.style.fontSize=c+"px"),(k.rem=a.rem=c)}var d,e=a.document,f=e.documentElement,g=e.querySelector('meta[name="viewport"]'),h=e.querySelector('meta[name="flexible"]'),i=0,j=0,k=b.flexible||(b.flexible={});if(g){console.warn("将根据已有的meta标签来设置缩放比例");var l=g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&((j=parseFloat(l[1])),(i=parseInt(1/j)))}else{if(h){var m=h.getAttribute("content");if(m){var n=m.match(/initial\-dpr=([\d\.]+)/),o=m.match(/maximum\-dpr=([\d\.]+)/);n&&((i=parseFloat(n[1])),(j=parseFloat((1/i).toFixed(2)))),o&&((i=parseFloat(o[1])),(j=parseFloat((1/i).toFixed(2))))}}}if(!i&&!j){var p=(a.navigator.appVersion.match(/android/gi),a.navigator.appVersion.match(/iphone/gi)),q=a.devicePixelRatio;(i=p?q>=3&&(!i||i>=3)?3:q>=2&&(!i||i>=2)?2:1:1),(j=1/i)}if((f.setAttribute("data-dpr",i),!g)){if(((g=e.createElement("meta")),g.setAttribute("name","viewport"),g.setAttribute("content","width=device-width, initial-scale="+j+", maximum-scale="+j+", minimum-scale="+j+", user-scalable=no"),f.firstElementChild)){f.firstElementChild.appendChild(g)}else{var r=e.createElement("div");r.appendChild(g),e.write(r.innerHTML)}}a.addEventListener("resize",function(){clearTimeout(d),(d=setTimeout(c,300))},!1),a.addEventListener("pageshow",function(a){a.persisted&&(clearTimeout(d),(d=setTimeout(c,300)))},!1),"complete"===e.readyState?(e.body.style.fontSize=14*i+"px"):e.addEventListener("DOMContentLoaded",function(){e.body.style.fontSize=14*i+"px"},!1),c(),(k.dpr=a.dpr=i),(k.refreshRem=c),(k.rem2px=function(a){var b=parseFloat(a)*this.rem;return"string"==typeof a&&a.match(/rem$/)&&(b+="px"),b}),(k.px2rem=function(a){var b=parseFloat(a)/this.rem;return"string"==typeof a&&a.match(/px$/)&&(b+="rem"),b})})(window,window.lib||(window.lib={}));` },
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  server: {
    port: 8082,
    host: '0.0.0.0'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#c90132' },
  /*
   ** Global CSS
   */
  //css: ['~/assets/css/main.less'],
  /*
   ** Plugins to load before mounting the App
   */
  //plugins: [{ src: '~/plugins/prototype.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  buildDir: 'build',
  /*
   ** Build configuration
   */
  build: {
    extractCSS: process.env.NODE_ENV !== 'development',
    publicPath: '/assets/',
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: (m) => m.constructor.name === 'CssModule',
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    filenames: {
      css: ({ isDev }) => (isDev ? '[name].css' : '[name].[contenthash:7].css'),
      manifest: ({ isDev }) =>
        isDev ? '[name].js' : '[name].[contenthash:7].js',
      vendor: ({ isDev }) =>
        isDev ? '[name].js' : '[name].[contenthash:7].js',
      app: ({ isDev }) => (isDev ? '[name].js' : '[name].[contenthash:7].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[name].[contenthash:7].js')
    },
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 75,
          unitPrecision: 2,
          propList: ['*']
        }
      },
      preset: {
        autoprefixer: {
          grid: true,
          overrideBrowserslist: ['last 3 versions']
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
