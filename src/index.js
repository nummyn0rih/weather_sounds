import weathers from './weathersList.js';
import pauseIcon from '../public/assets/icons/pause.svg';
import './index.css';

const state = {
  currentTrackID: 0,
  isPlaying: false,
};

const audio = document.querySelector('#audio');
const app = document.querySelector('#app');

const changeIcon = (id, status) => {
  const btn = document.querySelector(`#btn-${id}`);

  switch (status) {
    case 'pause':
      btn.innerHTML = pauseIcon;
      break;
    case 'play':
      const icon = weathers.find((el) => el.id === id).icon;
      btn.innerHTML = icon;
      break;
    default:
      break;
  }
};

const changeBg = (id) => {
  const { bg } = weathers.find((el) => el.id === id);

  app.style.backgroundImage = `url(${bg})`;
};

const play = (id) => () => {
  const { currentTrackID, isPlaying } = state;
  const weather = weathers.find((el) => el.id === id);

  if (currentTrackID === id) {
    isPlaying
      ? (audio.pause(), (state.isPlaying = false), changeIcon(id, 'pause'))
      : (audio.play(), (state.isPlaying = true), changeIcon(id, 'play'));
  } else {
    if (currentTrackID !== 0) {
      changeIcon(currentTrackID, 'play');
    }
    state.currentTrackID = id;
    state.isPlaying = true;
    audio.src = weather.sound;
    changeBg(id);
    audio.play();
  }
};

const createButton = () => {
  const btn = document.createElement('button');
  btn.className = 'btn';

  return btn;
};

const createButtonIMG = (data) => {
  const btn = createButton();
  btn.style.backgroundImage = `url(${data.bg})`;
  btn.style.backgroundSize = 'cover';
  btn.innerHTML = data.icon;
  btn.id = `btn-${data.id}`;
  btn.addEventListener('click', play(data.id));

  return btn;
};

const container = document.querySelector('#weathers');

const buttonsList = weathers.map((item) => createButtonIMG(item));

container.append(...buttonsList);
