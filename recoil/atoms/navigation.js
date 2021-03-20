import { atom } from 'recoil'

export const navigationState = atom({
  key: 'navigationState',
  default: {
    'path': 'whyDiscord',
    name: '》pourquoi-discord'
  }
})

export const burgerMenuState = atom({
  key: 'burgerMenuState',
  default: false
})
