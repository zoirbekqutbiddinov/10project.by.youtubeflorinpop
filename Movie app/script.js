const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const apiKey = "04c35731a5ee918f014970082a0088b1";
const imgUrl = "https://image.tmdb.org/t/p/w1280";
const searchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const close = document.querySelector(".close");

getMovie(apiUrl);
async function getMovie(url) {
  const res = await fetch(url);
  const respData = await res.json();
  console.log(respData);
  showMovies(respData.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <img
      src="${imgUrl + poster_path}"
      alt="${title}"
    />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview"><i class="fas fa-window-close close"></i>${overview}</div>
  `;

    main.appendChild(movieEl);
  });
}
function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 7) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  console.log(searchTerm);
  if (searchTerm) {
    getMovie(searchApi + searchTerm);
    search.value = "";
  }
});
