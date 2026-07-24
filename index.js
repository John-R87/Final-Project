async function onSearchChange(event) {
    const title = event.target.value;
getMovie(title)

async function getMovie(title) {
    const response = await fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=89315988`)
}