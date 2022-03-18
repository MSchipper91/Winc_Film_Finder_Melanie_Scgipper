function addEventListeners() {
  const radioBtns = document.getElementsByName("filter-list");

  radioBtns.forEach((radioButton) => {
    radioButton.addEventListener("change", () => handleOnChangeEvent(event));
  });
}

function addMoviesToDom(actualMovies) {
  const emptyDom = document.getElementById("movie-list");
  emptyDom.innerHTML = "";
  
  actualMovies.map((movie) => {
    const img = document.createElement("img");
    img.src = movie.poster;
    img.classList.add("movie-poster");

    const link = document.createElement("a");
    link.href = "https://www.imdb.com/title/" + movie.imdbID;
    link.target = "_blank";

    document.getElementById("movie-list").appendChild(link).appendChild(img);
  });
}

addMoviesToDom(movies);

function latestMovies() {
  const filterByYear = movies.filter((movie) => {
    return movie.year >= 2014;
  });
  addMoviesToDom(filterByYear);
  console.log(filterByYear);
}

function filterMovies(wordInMovie) {
  const movieByName = movies.filter((movie) => {
    return movie.title.includes(wordInMovie);
  });
  addMoviesToDom(movieByName);
  console.log(movieByName);
}

function handleOnChangeEvent(event) {
  console.log(event.target);

  switch (event.target.value) {
    case "allmovies":
      addMoviesToDom(movies);
      console.log("I am allmovies");
      break;
    case "newmovies":
      latestMovies();
      console.log("I am newmovies");
      break;
    case "avengers":
      filterMovies("Avengers");
      console.log("I am avengers");
      break;
    case "xmen":
      filterMovies("X-Men");
      console.log("I am xmen");
      break;
    case "princess":
      filterMovies("Princess");
      console.log("I am princess");
      break;
    case "batman":
      filterMovies("Batman");
      console.log("I am batman");
      break;
    default:
      addMoviesToDom(movies);
      console.log("I am default");
  }
}

addEventListeners();
