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

$sql = "SELECT id, user, email, created_at FROM user"; // Removed 'password_hash'
$result = mysqli_query($conn, $sql);

if ($result) {
    $customers = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $customers[] = $row;
    }
    echo json_encode($customers);
} else {
    echo json_encode(array("error" => "Failed to retrieve customers"));
}

$conn->close();
?>
