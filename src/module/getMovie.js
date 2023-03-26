const url = 'https://api.tvmaze.com/shows';

const getMovie = () => {
  const shows = [];

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((show) => {
        shows.push(show);
      });
      return shows;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      return [];
    });
};

export default getMovie;
