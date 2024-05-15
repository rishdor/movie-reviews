import { loadMovies } from "./movies-component/handler.js";
import { addReview, getReview } from "./reviews-component/handler.js";


init();

function init(){
    loadMovies();
    document.querySelector('form').addEventListener('submit', publishReview);
}

function publishReview(e){
    e.preventDefault();
    var review = getReview();
    addReview(review);
}