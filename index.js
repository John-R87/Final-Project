async function onSearchChange(event) {
    const title = event.target.value;
getMovie(event)

async function getMovie(event) {
    const title = event.target.value;
    const response = await fetch (
        `https://www.omdbapi.com/?i=tt3896198&apikey=89315988?s=${title}` 
    );
    const data = await response.json();
    console.log(data);
}