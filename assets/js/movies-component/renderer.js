function renderMovies(movies){
    var $target = document.querySelector('#all-movies ul')
    movies.forEach(movie => {
        $target.insertAdjacentHTML("beforeend", `<li value="${movie.id}">${movie.name}</li>`);
    });
}

export{renderMovies}