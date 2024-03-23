<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");
// Allow specified headers

// Database connection
$db_conn = mysqli_connect("localhost", "root", "", "reactjsdb");
if ($db_conn === false) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "ERROR: Could not connect to the database"]);
    exit();
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from the POST request
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $driver_id = $_POST['driver_id'];
    $booking_id = $_POST['booking_id'];

    // Prepare SQL statement to insert data into the bookingdetails table
    $stmt = $db_conn->prepare("INSERT INTO bookingdetails (name, email, mobile, driver_id, booking_id) 
                               VALUES (?, ?, ?, ?, ?)");

    // Bind parameters to the SQL statement
    $stmt->bind_param('ssssi', $name, $email, $mobile, $driver_id, $booking_id);

    // Execute the SQL statement
    if ($stmt->execute()) {
        echo json_encode(["message" => "Booking details saved successfully"]);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(["error" => "Error saving booking details"]);
    }

    // Close statement and database connection
    $stmt->close();
    $db_conn->close();
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Invalid request method"]);
}
?>
