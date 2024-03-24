<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "reactjsdb");
if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
} else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);
 
    $feedback = isset($dData['feedback']) ? $dData['feedback'] : "";
    $userName = isset($dData['userName']) ? $dData['userName'] : "";
    $driverName = isset($dData['driverName']) ? $dData['driverName'] : ""; 
    $driver_id = isset($dData['driver_id']) ? $dData['driver_id'] : ""; 

    $result = "";

    if(!empty($feedback) && !empty($userName) && !empty($driverName) && !empty($driver_id)){
        $sql = "INSERT INTO feedback (feedback, userName, driverName,driver_id) VALUES ('$feedback', '$userName','$driverName','$driver_id')";
        $res = mysqli_query($conn, $sql);
        if($res){
            $result = "You have submitted successfully!";
            $feedbackDetails = array(
                "id" => mysqli_insert_id($conn),
                "feedback" => $feedback,
                "userName" => $userName,
                "driverName" => $driverName,
                "driverName" => $driver_id
            );
            $response[] = $feedbackDetails;
        } else {
            $result = "Failed to insert data into the database.";
        }
    } else {
        $result = "All fields are required!";
    }

    $response[] = array("result" => $result);
    echo json_encode($response);
    $conn->close();
}
?>
