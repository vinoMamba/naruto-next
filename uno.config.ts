import {
  defineConfig,
  presetAttributify, presetIcons, presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.5,
    })
  ],
  rules: [
    ['box-b', { 'box-shadow': 'inset 0 -1px 0 0 #eaeaea' }],
  ]
})
