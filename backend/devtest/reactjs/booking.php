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

    $pickupLocation = isset($dData['pickupLocation']) ? htmlspecialchars($dData['pickupLocation']) : "";
    $dropoffLocation = isset($dData['dropoffLocation']) ? htmlspecialchars($dData['dropoffLocation']) : "";
    $pickupDate = isset($dData['pickupDate']) ? htmlspecialchars($dData['pickupDate']) : "";
    $pickupTime = isset($dData['pickupTime']) ? htmlspecialchars($dData['pickupTime']) : "";
    $cabType = isset($dData['cabType']) ? htmlspecialchars($dData['cabType']) : "";

    $result = "";

    if ($pickupLocation != "" && $dropoffLocation != "" && $pickupDate != "" && $pickupTime != "" && $cabType != "") {
        $sql = "INSERT INTO booking(pickupLocation, dropoffLocation, pickupDate, pickupTime, cabType) VALUES('$pickupLocation', '$dropoffLocation', '$pickupDate', '$pickupTime', '$cabType')";
        $res = mysqli_query($conn, $sql);
        if ($res) {
            $result = "You have booked successfully!";

            // Optionally retrieve user details for specific use cases (sanitize data before sending)
            // $userDetails = array(
            //     "id" => mysqli_insert_id($conn),
            //     "pickupLocation" => $pickupLocation,
            //     "dropoffLocation" => $dropoffLocation,
            //     "pickupDate" => $pickupDate,
            //     "pickupTime" => $pickupTime,
            //     "cabType" => $cabType
            // );
            // $response[] = $userDetails;
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
