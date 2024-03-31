<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn = mysqli_connect("localhost", "root", "", "reactjsdb");
if ($db_conn === false) {
    die("ERROR: Could Not Connect" . mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":
        // Handle GET requests
        break;

    case "POST":
        // Handle POST requests
        $data = json_decode(file_get_contents("php://input"), true); // Assuming data is sent in JSON format

        if (isset($_POST['email']) && isset($_POST['pass2'])) {
            $email = $_POST['email'];
            $pass2 = $_POST['pass2'];

            $sql = "UPDATE user 
                    SET pass = '$pass2'
                    WHERE email = '$email'";
            $result = mysqli_query($db_conn, $sql);

            if ($result) {
                echo json_encode(["success" => "You have registered successfully! $email $pass2"]);
            } else {
                echo json_encode(["error" => "Failed to update ride status"]);
            }
        } else {
            echo json_encode(["error" => "Data not in correct format"]);
        }
        break;

    case "DELETE":
        // Handle DELETE requests
        break;
}
?>
