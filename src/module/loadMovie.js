import getMovie from './getMovie.js';
import Icon from '../assets/logo-orange.png';

const showDiv = document.querySelector('.shows');

const displayMoive = () => {
  let innerHTML = '';
  innerHTML += `
    <div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col col-4 d-flex justify-content-center">
            <div class="row">
                <div class="col col-12">
                    <img class="image" src="${Icon}" alt="" srcset="">
                </div>
                <div class="col col-12">
                    <h1></h1>
                </div>
                <div class="col col-12">
                    <button class="btn btn-outline-light">Comment</button>
                </div>
            </div>
        </div>
    </div>
      </div>
    `;
  showDiv.innerHTML = innerHTML;
};

export default displayMoive;