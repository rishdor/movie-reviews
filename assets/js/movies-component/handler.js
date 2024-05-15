import { fetchFromServer } from "../fetcher.js";
import { renderMovies } from "./renderer.js";

function loadMovies(){
    fetchFromServer("GET", "movies")
        .then(json => {
            const movies = json.data;
            renderMovies(movies);
        })
}

export{loadMovies}