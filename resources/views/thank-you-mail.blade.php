<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review confirmation</title>
</head>
<body>
    <h1>Thank you for your review</h1>

    <h3>Review details</h3>

    <ul>
        <li>Movie title: {{$movie -> name }}</li>
        <li>Message: {{ $review -> message }}</li>
        <li>Rating: {{$review -> rating}} starts</li>
    </ul>

    <p>This mail was sent to {{ $review -> email }}</p>
</body>
</html>