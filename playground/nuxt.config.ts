import GoogleFontsModule from '../src/module'

export default defineNuxtConfig({
  modules: [
    GoogleFontsModule
  ],
  googleFonts: {
    inject: true,
    localFonts: [
      { name: 'Stockport Extra', path: '/fonts/Stockport-Extra.ttf' },
      { name: 'Stockport Extra', path: '/fonts/Stockport-Extra.woff' },
      { name: 'Stockport Brush', path: '/fonts/Stockport-Brush.woff' }
    ],
    families: {
      Roboto: true,
      Mulish: true
    }
  }
})
