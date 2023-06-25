import weathers from './weathersList.js';
import './index.css';

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

  return btn;
};

const container = document.querySelector('#weathers');

const buttonsList = weathers.map((item) => createButtonIMG(item));

container.append(...buttonsList);
