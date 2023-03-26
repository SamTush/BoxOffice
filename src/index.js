import './styles/main.scss';
import Icon from './assets/logo-orange.png';
import loadMovie from './module/loadMovie.js';
import getMovie from './module/getMovie.js';

const image = document.querySelector('.image');

image.setAttribute('src', Icon);

window.addEventListener('load', () => {
  loadMovie();
  getMovie();
});
