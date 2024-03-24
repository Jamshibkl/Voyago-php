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

$sql = "SELECT id, feedback, userName, driverName,driver_id FROM feedback"; // Removed 'password_hash'
$result = mysqli_query($conn, $sql);

if ($result) {
    $feedback = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $feedback[] = $row;
    }
    echo json_encode($feedback);
} else {
    echo json_encode(array("error" => "Failed to retrieve customers"));
}

$conn->close();
?>
