function renderReviews(reviews){
    var $target = document.querySelector('#movie-details ul')

    if ($target.innerHTML.trim() !== "") {
        $target.innerHTML = "";
    }

    reviews.forEach(review => {
        const $template = document.querySelector("#review-template").content.firstElementChild.cloneNode(true);
        
        $template.querySelector(".email").textContent = review.email;
        $template.querySelector('.message').textContent = review.message;
        $template.querySelector('.rating').textContent = review.rating;

        $target.insertAdjacentHTML("beforeend", $template.outerHTML);
    });
}

export{renderReviews}