<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");
 
    $conn = new mysqli("localhost", "root", "", "reactjsdb");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);
 
        $location = $dData['location'];
 
        $result = "";
 
        if($location != ""){
            $sql = "SELECT * FROM locations WHERE location='$location';";
            $res = mysqli_query($conn, $sql);
            if(mysqli_num_rows($res) != 0){
                $result = "";
            }
            else{
                $result = "Sorry service is not avable!";
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