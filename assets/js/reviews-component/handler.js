import { fetchFromServer } from "../fetcher.js";
import { renderReviews, renderErrors, clearErrors } from "../reviews-component/renderer.js";

var currentMovie;

function loadReviews(movie){
    clearErrors();
    currentMovie = movie;
    console.log(currentMovie)
    fetchFromServer("GET", `movies/${movie.id}/reviews`)
        .then(json => {
            const reviews = json.data;
            renderReviews(reviews);
            document.getElementById('movie-details').classList.remove('hidden');
            var $title = document.querySelector('#movie-title');
            $title.innerText = movie.name;
            $title.value = movie.id;
        })
        .catch(err => console.error(err));
}

function addReview(review){
    clearErrors();
    fetchFromServer("POST", `movies/${review.movie_id}/reviews`, review)
        .then(review => {
            loadReviews(currentMovie);
        })
    .catch(err => {
        if ("errors" in err) {
            renderErrors(err.errors);
        } else {
            console.error(err);
        }
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