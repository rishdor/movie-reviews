import { loadReviews } from "../reviews-component/handler.js";

function renderMovies(movies){
    var $target = document.querySelector('#all-movies ul');
    movies.forEach(movie => {
        var li = document.createElement('li');
        li.textContent = movie.name;
        li.value = movie.id;
        li.addEventListener('click', function() {
            loadReviews(movie);
        });
        $target.appendChild(li);
    });
}

export { renderMovies };