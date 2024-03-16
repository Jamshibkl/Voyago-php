<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET"); // Allow only GET requests for data retrieval
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "reactjsdb");
if (mysqli_connect_error()) {
    echo json_encode(array("error" => mysqli_connect_error()));
    exit();
}

$sql = "SELECT id, username, pickupLocation, dropoffLocation, pickupDate, pickupTime, cabType, created_at FROM booking";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
    $bookings = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $bookings[] = $row;
    }
    echo json_encode($bookings);
} else {
    echo json_encode(array("error" => "No bookings found"));
}

$conn->close();
?>