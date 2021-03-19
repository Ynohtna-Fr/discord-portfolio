import { atom } from 'recoil'

export const navigationState = atom({
  key: 'navigationState',
  default: {
    'path': 'why-discord',
    name: '》pourquoi-discord'
  }
})
