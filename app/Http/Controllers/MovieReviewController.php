<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Review;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\ThankYou;

class MovieReviewController extends Controller
{
    function all()
    {
        Log::info("Retrieving all movies...");
        $movies = Movie::all();
        return ["data" => $movies];
    }

    function reviews(Movie $movie){
        Log::info("Retrieving all reviews for movie \"{$movie->name}\"...");
        $reviews = Review::where('movie_id', $movie->id)->get();
        return ["data" => $reviews];
    }

    function addReview(Request $request, Movie $movie){
        $rules = [
            "email" => "string|email|required",
            "message" => "string|min:5|max:255|required",
            "rating" => "numeric|min:1|max:5|required"
        ];

        $validator = Validator::make($request -> all(), $rules);

        if ($validator -> fails()) {
            Log::warning("Input validation errors occured");

            return response() -> json (["errors" => $validator -> errors()],
                Response::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            $review = new Review();

            $review->movie_id = $movie->id;
            $review->email = $request->email;
            $review->message = $request->message;
            $review->rating = $request->rating;

            $review->save();

            $this -> sendMail($review, $movie);

            return ['review' => $review];
        }
    }

    function sendMail($movie, $review) {
        Log::info("sending email");

        Mail::to($review -> email)
            -> send(new ThankYou($movie, $review));
    }
}
