<?php
    header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");
 
    $conn = new mysqli("localhost", "root", "", "reactjsDB");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);
 
        $admin = $dData['admin'];
        $pass = $dData['pass'];
        //$password = md5($pass);
        $result = "";
 
        if($admin != "" and $pass != ""){
            $sql = "SELECT * FROM admin WHERE admin='$admin';";
            $res = mysqli_query($conn, $sql);
 
            if(mysqli_num_rows($res) != 0){
                $row = mysqli_fetch_array($res);
                if($pass != $row['pass']){
                    $result = "Invalid password!";
                }
                else{
                    $result = "Loggedin successfully! Redirecting...";
                }
            }
            else{
                $result = "Invalid username!";
            }
        }
        else{
            $result = "";
        }
 
        $conn -> close();
        $response[] = array("result" => $result);
        echo json_encode($response);
    }
 
?>