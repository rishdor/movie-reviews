import { fetchFromServer } from "../fetcher.js";
import { renderReviews } from "../reviews-component/renderer.js";

var currentMovie;

function loadReviews(movie){
    currentMovie = movie;
    console.log(currentMovie)
    fetchFromServer("GET", `movies/${movie.id}/reviews`)
        .then(json => {
            const reviews = json.data;
            console.log(reviews)
            renderReviews(reviews);
            document.getElementById('movie-details').classList.remove('hidden');
            var $title = document.querySelector('#movie-title');
            $title.innerText = movie.name;
            $title.value = movie.id;
        })
}

function addReview(review){
    fetchFromServer("POST", `movies/${review.movie_id}/reviews`, review)
        .then(review => {
            loadReviews(currentMovie);
        })
}

function getReview(){
	return {
        movie_id: document.querySelector('#movie-title').value,
		email: document.querySelector("#email").value,
		message: document.querySelector("#message").value,
        rating: parseInt(document.querySelector("#rating").value)
	};
}
export {loadReviews, addReview, getReview}