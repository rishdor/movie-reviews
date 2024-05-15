<?php

use App\Http\Controllers\MovieReviewController;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/movies", [MovieReviewController::class, "all"]);

Route::get("/movies/{movie}/reviews", [MovieReviewController::class, "reviews"]);

Route::post("/movies/{movie}/reviews", [MovieReviewController::class, "addReview"]);