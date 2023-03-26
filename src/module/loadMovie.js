import getMovie from './getMovie.js';

const displayMoive = () => {
  const showDiv = document.querySelector('.shows');

  let innerHTML = '';
  innerHTML += `
  <div class="container">
  <div class="row d-flex justify-content-center">
      <div class="col col-12 d-flex justify-content-center main-main">
          <div class="row">
              <div class="col col-3">
                <div id="main">
                </div>
              </div>
          </div>
      </div>
  </div>
    </div>
  `;
  showDiv.innerHTML = innerHTML;

  const mainContainer = document.querySelector('#main');
  const mainMain = document.querySelector('.main-main');
  //   const movieImage = document.querySelector('#image');
  //   const movieTitle = document.querySelector('#title');
  //   const movieButton = document.querySelector('#button');

  getMovie().then((data) => {
    data.slice(0, 10).reverse().forEach((element) => {
      const createImg = document.createElement('div');
      const createTitle = document.createElement('div');
      const createBtn = document.createElement('div');
      createImg.innerHTML = `<img class="image" src="${element.image.original}" alt="" srcset="">`;
      createTitle.innerHTML = `<h1>${element.name}</h1>`;
      createBtn.innerHTML = `
      <button class="btn btn-outline-light">Comment</button>
      `;
      mainContainer.appendChild(createImg);
      mainContainer.appendChild(createTitle);
      mainContainer.appendChild(createBtn);

    //   movieImage.appendChild(createImg);
    //   movieTitle.appendChild(createTitle);
    //   movieButton.appendChild(createBtn);
    });
  });
};

export default displayMoive;