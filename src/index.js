import './styles/main.scss';
import Icon from './assets/logo-orange.png';
import loadMovie from './module/loadMovie.js';

const image = document.querySelector('.image');
image.src = Icon;

const image2 = document.querySelector('.image2');
image2.src = Icon;

window.addEventListener('load', () => {
  loadMovie();
});
