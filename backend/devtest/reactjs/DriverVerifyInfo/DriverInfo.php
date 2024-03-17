<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: POST"); // Allow POST method
header("Access-Control-Allow-Headers: Content-Type"); // Allow specified headers

$db_conn = mysqli_connect("localhost", "root", "", "reactjsdb");
if ($db_conn === false) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "ERROR: Could not connect to the database"]);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
    exit();
}

switch ($method) {
    case "GET":
        $path = explode('/', $_SERVER['REQUEST_URI']);

        if (isset($path[4]) && is_numeric($path[4])) {
            echo "Get Api Single Row";
            die;
        } else {
            $allproduct = mysqli_query($db_conn, "SELECT * FROM driververifyinfo");
            if ($allproduct === false) {
                http_response_code(500); // Internal Server Error
                echo json_encode(["error" => "Database error: " . mysqli_error($db_conn)]);
                exit();
            }

            if (mysqli_num_rows($allproduct) > 0) {
                while ($row = mysqli_fetch_array($allproduct)) {
                    $json_array["productdata"][] = array(
                        "id" => $row['id'],
                        "driver" => $row["driver"],
                        "email" => $row["email"],
                        "mobile" => $row["mobile"],
                        "adharId" => $row["adharId"],
                        "profileImg" => $row["profileImg"],
                        "adharImg" => $row["adharImg"],
                        "licenseImg" => $row["licenseImg"],
                        "license" => $row["license"],
                        "location" => $row["location"]
                    );
                }
                echo json_encode($json_array["productdata"]);
                return;
            } else {
                echo json_encode(["result" => "No data available"]);
                return;
            }
        }
        break;

    case "POST":
        if (isset($_FILES['adharImg'])) {
            $driver = mysqli_real_escape_string($db_conn, $_POST['driver']);
            $email = mysqli_real_escape_string($db_conn, $_POST['email']);
            $mobile = mysqli_real_escape_string($db_conn, $_POST['mobile']);
            $pass = mysqli_real_escape_string($db_conn, $_POST['pass2']);
            $adharId = mysqli_real_escape_string($db_conn, $_POST['adharId']);
            $location = mysqli_real_escape_string($db_conn, $_POST['location']);

            // Check if file uploads were successful
            if ($_FILES['adharImg']['error'] !== UPLOAD_ERR_OK || $_FILES['licenseImg']['error'] !== UPLOAD_ERR_OK || $_FILES['profileImg']['error'] !== UPLOAD_ERR_OK) {
                http_response_code(400); // Bad Request
                echo json_encode(["error" => "File upload error"]);
                return;
            }

            $adharImg = time() . $_FILES['adharImg']['name'];
            $licenseImg = time() . $_FILES['licenseImg']['name'];
            $profileImg = time() . $_FILES['profileImg']['name'];

            $destination1 = $_SERVER['DOCUMENT_ROOT'] . '/devtest/reactjs/DriverVerifyInfo/images/adhar' . "/" . $adharImg;
            $destination2 = $_SERVER['DOCUMENT_ROOT'] . '/devtest/reactjs/DriverVerifyInfo/images/license' . "/" . $licenseImg;
            $destination3 = $_SERVER['DOCUMENT_ROOT'] . '/devtest/reactjs/DriverVerifyInfo/images/Profile' . "/" . $profileImg;

            $result = mysqli_query($db_conn, "INSERT INTO DriverVerifyInfo (driver, email, mobile, pass, adharId, adharImg, licenseImg, profileImg, location)
                VALUES('$driver', '$email','$mobile', '$pass','$adharId','$adharImg','$licenseImg','$profileImg','$location')");

            if ($result) {
                move_uploaded_file($_FILES['adharImg']['tmp_name'], $destination1);
                move_uploaded_file($_FILES['licenseImg']['tmp_name'], $destination2);
                move_uploaded_file($_FILES['profileImg']['tmp_name'], $destination3);

                echo json_encode(["success" => "You have registered successfully!"]);
                return;
            } else {
                http_response_code(500); // Internal Server Error
                echo json_encode(["error" => "Data not inserted"]);
                return;
            }
        } else {
            http_response_code(400); // Bad Request
            echo json_encode(["error" => "Data not in correct format"]);
            return;
        }
        break;
}
?>
