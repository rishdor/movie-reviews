import { fetchFromServer } from "../fetcher.js";
import { renderReviews } from "../reviews-component/renderer.js";

function loadReviews(movie){
    fetchFromServer("GET", `movies/${movie.id}/reviews`)
        .then(json => {
            const reviews = json.data;
            console.log(reviews)
            renderReviews(reviews);
            document.getElementById('movie-details').classList.remove('hidden');
            var $title = document.querySelector('#movie-title');
            $title.innerText = movie.name;
        })
}

export {loadReviews}