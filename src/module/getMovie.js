const url = 'https://api.tvmaze.com/shows';

const shows = [];

const getMovie = async () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Loop through each show and push it to the shows array
      data.forEach((show) => {
        shows.push(show);
        console.log(show.name);
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  return shows;
};

export default getMovie;