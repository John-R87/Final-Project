async function onSearchChange(event) {
    const title = event.target.value;
getMovie(event)
}

async function getMovie(event) {
    const title = event.target.value;
    const response = await fetch (
        `https://www.omdbapi.com/?i=tt3896198&apikey=89315988&s=${title}` 
    );
    const data = await response.json();
    console.log(data);
}


function sortMovies(movies, order) {
    return movies.sort((a, b) => {
        if (order === "A-Z") {
            return a.Title.localeCompare(b.Title);
        } else {
            return b.Title.localeCompare(a.Title);
        }
    });
}
let movies = [];
const movieFilter = document.getElementById("filter");

movieFilter.addEventListener("change", (event) => {
  const sortedMovies = sortMovies(movies, event.target.value);
  displayMovies(sortedMovies);
});



/*

experimental code

*/
const searchInput = document.getElementById('site-search');
const searchBtn = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results-container');

searchBtn.addEventListener("click", () => {
    const query = searchInput.value;
    if (query) {
        fetchSearchResults(query);
    }
});

async function fetchSearchResults(query) {
    resultsContainer.innerHTML = '<p>Loading results...</p>';

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=89315988&s=${query}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        resultsContainer.innerHTML = '';

        if (data.Search.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
            return;
        }

        movies = data.Search;
        movies.forEach(item => {
            const resultCard = `
                <div class="result-card">
                    <h3>${item.Title}</h3>
                    <p>${item.Year}</p>
                </div>
            `;
            resultsContainer.insertAdjacentHTML('beforeend', resultCard);
        });

    } catch (error) {
        console.error('API Error:', error);
        resultsContainer.innerHTML = '<p>Something went wrong. Please try again.</p>';
    }
}

function displayMovies(movieList) {
  resultsContainer.innerHTML = "";
  movieList.forEach(item => {
      const resultCard = `
          <div class="result-card">
              <h3>${item.Title}</h3>
                    <p>${item.Year}</p>
                </div>
            `;
            resultsContainer.insertAdjacentHTML('beforeend', resultCard);
        });
}

