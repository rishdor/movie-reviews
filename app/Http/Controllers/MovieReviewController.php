<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Review;

class MovieReviewController extends Controller
{
    function all()
    {
        $movies = Movie::all();
        return ["data" => $movies];
    }

    function reviews(Movie $movie){
        $reviews = Review::where('movie_id', $movie->id)->get();
        return ["data" => $reviews];
    }

    function addReview(Request $request, Movie $movie){
        $review = new Review();

        $review->movie_id = $movie->id;
        $review->email = $request->email;
        $review->message = $request->message;
        $review->rating = $request->rating;

        $review->save();

        return ['review' => $review];
    }
}
