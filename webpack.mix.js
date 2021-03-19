const mix = require('laravel-mix')

mix
.setPublicPath('./styles/')
.sass('./src/css/index.scss', './styles/globals.css')
.options({
  processCssUrls: false
})
.disableNotifications()
