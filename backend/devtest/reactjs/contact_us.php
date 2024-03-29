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
 
    $fname = isset($dData['fname']) ? $dData['fname'] : "";
    $lname = isset($dData['lname']) ? $dData['lname'] : "";
    $email = isset($dData['email']) ? $dData['email'] : "";
    $message = isset($dData['message']) ? $dData['message'] : "";

    $result = "";

    if($fname != "" && $lname != "" && $email != "" && $message != ""){
        // Fix SQL query syntax by adding missing single quotes around '$message'
        $sql = "INSERT INTO contact(fname, lname, email, message) VALUES('$fname', '$lname', '$email', '$message')";
        $res = mysqli_query($conn, $sql);
        if($res){
            $result = "You have submitted successfully!";
            // Retrieve the user details and return them in the response
            $userDetails = array(
                "id" => mysqli_insert_id($conn),
                "fname" => $fname,
                "lname" => $lname,
                "email" => $email,
                "message" => $message
            );
            $response[] = $userDetails;
        } else {
            $result = "Failed to insert into the database!";
        }
    } else {
        $result = "All fields are required!";
    }

    $conn->close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}
?>
