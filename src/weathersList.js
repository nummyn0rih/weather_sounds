import rainyBg from '../public/assets/rainy-bg.jpg';
import summerBg from '../public/assets/summer-bg.jpg';
import winterBg from '../public/assets/winter-bg.jpg';
import rainyIcon from '../public/assets/icons/cloud-rain.svg';
import sunIcon from '../public/assets/icons/sun.svg';
import snowIcon from '../public/assets/icons/cloud-snow.svg';
// import rainSound from '../public/assets/sounds/rain.mp3';

export default [
  {
    id: 1,
    name: 'sun',
    bg: summerBg,
    // sound: rainSound,
    icon: sunIcon,
  },
  {
    id: 2,
    name: 'rain',
    bg: rainyBg,
    // sound: rainSound,
    icon: rainyIcon,
  },
  {
    id: 3,
    name: 'snow',
    bg: winterBg,
    // sound: rainSound,
    icon: snowIcon,
  },
];
