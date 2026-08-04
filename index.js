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



/*

experimental code

*/
const searchInput = document.getElementById('site-search');
const searchBtn = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results-container');

searchBtn.addEventListener("search", () => {
    const query = searchInput.value;
    if (query) {
        fetchSearchResults(query);
    }
});

async function fetchSearchResults(query) {
    resultsContainer.innerHTML = '<p>Loading results...</p>';

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=89315988&s=${title}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        resultsContainer.innerHTML = '';

        if (data.results.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
            return;
        }

        data.results.forEach(item => {
            const resultCard = `
                <div class="result-card">
                    <h3>${title}</h3>
                    <p>${year}</p>
                </div>
            `;
            resultsContainer.insertAdjacentHTML('beforeend', resultCard);
        });

    } catch (error) {
        console.error('API Error:', error);
        resultsContainer.innerHTML = '<p>Something went wrong. Please try again.</p>';
    }
}