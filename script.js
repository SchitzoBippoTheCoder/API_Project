// Example Search
// in --> objects
// of --> array

const apiKey = "e06cb446302dcf3a3cb1358720141aad";

let movieName = prompt("Search for a movie:");

let search = axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
        api_key: apiKey,
        query: movieName,
    }
})

let searchResults = search.then((moviesData) => {
    console.table(moviesData.data.results);
    console.log(moviesData.data.results[1].original_title)
});

console.log(searchResults);