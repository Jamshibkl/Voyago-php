<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "reactjsdb");
if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $username = isset($dData['username']) ? htmlspecialchars($dData['username']) : "";
    $pickupLocation = isset($dData['pickupLocation']) ? htmlspecialchars($dData['pickupLocation']) : "";
    $dropoffLocation = isset($dData['dropoffLocation']) ? htmlspecialchars($dData['dropoffLocation']) : "";
    $pickupDate = isset($dData['pickupDate']) ? htmlspecialchars($dData['pickupDate']) : "";
    $pickupTime = isset($dData['pickupTime']) ? htmlspecialchars($dData['pickupTime']) : "";
    $cabType = isset($dData['cabType']) ? htmlspecialchars($dData['cabType']) : "";

    $result = "";

    if ($username != "" && $pickupLocation != "" && $dropoffLocation != "" && $pickupDate != "" && $pickupTime != "" && $cabType != "") {
        $sql = "INSERT INTO booking(username, pickupLocation, mobile, pickupDate, pickupTime, cabType) VALUES('$username','$pickupLocation', '$dropoffLocation', '$pickupDate', '$pickupTime', '$cabType')";
        $res = mysqli_query($conn, $sql);
        if ($res) {
            $result = "You have booked successfully!";
        } else {
            $result = "Booking failed: " . mysqli_error($conn); // Capture specific error for debugging
        }
    } else {
        $result = "All fields are required!";
    }

    $conn->close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}
?>
