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
 
    $admin = isset($dData['admin']) ? $dData['admin'] : "";
    $email = isset($dData['email']) ? $dData['email'] : "";
    $pass = isset($dData['pass']) ? $dData['pass'] : "";

    $result = "";

    if($admin != "" && $email != "" && $pass != ""){
        $sql = "INSERT INTO admin(admin, email, pass) VALUES('$admin', '$email', '$pass');";
        $res = mysqli_query($conn, $sql);
        if($res){
            $result = "You have registered successfully!";
            // Retrieve the user details and return them in the response
            $userDetails = array(
                "id" => mysqli_insert_id($conn),
                "admin" => $admin,
                "email" => $email,
                "password" => $pass
            );
            $response[] = $userDetails;
        } else {
            $result = "";
        }
    } else {
        $result = "All fields are required!";
    }

    $conn->close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}
?>
