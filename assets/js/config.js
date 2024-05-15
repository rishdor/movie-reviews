const config = {
    baseUrl: "https://movie-reviews.test/api/"
}

function getApiUrl(path){
    return `${config.baseUrl}${path}`;
}

export {getApiUrl};