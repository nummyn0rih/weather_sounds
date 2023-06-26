import weathers from './weathersList.js';
import './index.css';

const state = {
  currentTrackID: 0,
  isPlaying: false,
};

const audio = document.querySelector('#audio');

const play = (id) => () => {
  const weather = weathers.find((el) => el.id === id);

  if (state.currentTrackID === id) {
    state.isPlaying
      ? (audio.pause(), (state.isPlaying = false))
      : (audio.play(), (state.isPlaying = true));
  } else {
    state.currentTrackID = id;
    state.isPlaying = true;
    audio.src = weather.sound;
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
  btn.addEventListener('click', play(data.id));

  return btn;
};

const container = document.querySelector('#weathers');

const buttonsList = weathers.map((item) => createButtonIMG(item));

container.append(...buttonsList);
