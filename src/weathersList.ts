import { type WeathersItems } from './interfaces'

import rainyBg from '../public/assets/rainy-bg.jpg'
import summerBg from '../public/assets/summer-bg.jpg'
import winterBg from '../public/assets/winter-bg.jpg'
import rainyIcon from '../public/assets/icons/cloud-rain.svg'
import sunIcon from '../public/assets/icons/sun.svg'
import snowIcon from '../public/assets/icons/cloud-snow.svg'
import rainSound from '../public/assets/sounds/rain.mp3'
import summerSound from '../public/assets/sounds/summer.mp3'
import winterSound from '../public/assets/sounds/winter.mp3'

const weathers: WeathersItems = {
  1: {
    id: 1,
    name: 'sun',
    bg: summerBg,
    sound: summerSound,
    icon: sunIcon
  },
  2: {
    id: 2,
    name: 'rain',
    bg: rainyBg,
    sound: rainSound,
    icon: rainyIcon
  },
  3: {
    id: 3,
    name: 'snow',
    bg: winterBg,
    sound: winterSound,
    icon: snowIcon
  }
}

export default weathers
