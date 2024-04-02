<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "reactjsdb");
if (mysqli_connect_error()) {
    echo json_encode(array("error" => mysqli_connect_error()));
    exit();
}

$driverEmail = $_GET['driverEmail']; // Assuming you pass driver's email as a query parameter

// Query to get total amount, total rides, and total hours for the driver
$sql = "SELECT SUM(totalCharge) AS totalAmount, COUNT(*) AS totalRides, SUM(tolatHour) AS totalHours FROM rideinformation WHERE driverEmail = '$driverEmail'";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
    $data = mysqli_fetch_assoc($result);
    echo json_encode($data);
} else {
    echo json_encode(array("error" => "No data found for the driver"));
}

$conn->close();
?>
