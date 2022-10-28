// Example Search
// in --> objects
// of --> array

const apiKey = "e06cb446302dcf3a3cb1358720141aad";

function GetMovieData() {
    let movieID = parseInt(document.getElementById("dropdownMenu").value);

    let search = axios.get("https://api.themoviedb.org/3/movie/" + movieID, {
        params: {
            api_key: apiKey,
            append_to_response: "videos",
        }
    })

    let searchResult = search.then((movieData) => {
        document.getElementById("movieImage").style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${movieData.data.backdrop_path})`;
        document.getElementById("poster").src = "https://image.tmdb.org/t/p/w500" + movieData.data.poster_path;

        document.getElementById("title").innerHTML = movieData.data.original_title;
        document.getElementById("tagline").innerHTML = movieData.data.tagline;
        document.getElementById("status").innerHTML = `${movieData.data.status} ~ ${movieData.data.release_date}`;
        document.getElementById("popularity").innerHTML = `Popularity: ${movieData.data.popularity}`;
        document.getElementById("voteAverage").innerHTML = `Vote Average: ${movieData.data.vote_average}`;
        document.getElementById("voteCount").innerHTML = `Vote Count: ${movieData.data.vote_count}`;
        document.getElementById("budget").innerHTML = `Budget: $${movieData.data.budget}`;
        document.getElementById("overview").innerHTML = movieData.data.overview;
        document.getElementById("trailer").src = "https://www.youtube.com/embed/" + (movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer")).at(0).key;
    })
}

function Search() {
    let searchParam = document.getElementById("searchBar").value;

    let _searchParam = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${searchParam}`, {

    })

    let _searchParamResult = _searchParam.then((finalResult) => {
        //console.log(finalResult.data.results[0]);

        document.getElementById("dropdownMenu").innerText = null;

        for (let count = 0; count <= finalResult.data.results.length; count++) {
            let newOption = document.createElement("option");
            newOption.setAttribute('value', finalResult.data.results[count].id);
            newOption.innerHTML = finalResult.data.results[count].original_title;

            console.log(newOption.innerHTML);

            document.getElementById("dropdownMenu").options.add(newOption);
        }
    })
}
