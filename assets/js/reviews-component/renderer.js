function renderReviews(reviews){
    var $target = document.querySelector('#movie-details ul')

    if ($target.innerHTML.trim() !== "") {
        $target.innerHTML = "";
    }

    reviews.forEach(review => {
        const $template = document.querySelector("#review-template").content.firstElementChild.cloneNode(true);
        
        $template.querySelector(".email").textContent = review.email;
        $template.querySelector('.message').textContent = review.message;
        $template.querySelector('.rating').textContent = "🌟".repeat(review.rating);

        $target.insertAdjacentHTML("beforeend", $template.outerHTML);
    });
}

function clearErrors() {
    const $ul = document.querySelector("#errors");
    $ul.innerHTML = "";
}

function renderErrors(errors) {
    const $ul = document.querySelector("#errors");
    
    for (const field in errors) {
        for (const error of errors[field]) {
            $ul.innerHTML += `<li>${error}</li>`;
        }
    }
}

export{renderReviews, clearErrors, renderErrors}