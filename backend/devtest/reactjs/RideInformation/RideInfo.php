<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn= mysqli_connect("localhost","root", "", "reactjsdb");
if($db_conn===false)
{
  die("ERROR: Could Not Connect".mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
//echo "test----".$method; die;
switch($method)
{
    case "GET":      
    break;

    case "POST":
           if(isset($_POST['driverId']))
           {
                $driverId = $_POST['driverId'];
                $driverName = $_POST['driverName'];
                $driverEmail = $_POST['driverEmail'];
                $driverMobile = $_POST['driverMobile'];
                $driverLocation = $_POST['driverLocation'];
                $driverAdharId = $_POST['driverAdharId'];
                $driverLicense = $_POST['driverLicense'];
                $UserName = $_POST['UserName'];
                $UserMobile = $_POST['UserMobile'];
                $tolatHour = $_POST['tolatHour'];
                $totalCharge = $_POST['totalCharge'];




                $result= mysqli_query($db_conn,"INSERT INTO rideinformation (driverId, driverName, driverEmail, driverMobile, location, driverAdharId, driverLicense, UserName, UserMobile, tolatHour, totalCharge )
                VALUES('$driverId', '$driverName','$driverEmail', '$driverMobile','$driverLocation','$driverAdharId','$driverLicense','$UserName','$UserMobile','$tolatHour','$totalCharge' )");

                if($result){
                  echo json_encode(["success"=>"You have registered successfully!"]);
                  return;
                }else{
                  echo json_encode(["success"=>" not Inserted!"]);
                  return;
                }

              } else{
                echo json_encode(["success"=>"Data not in Correct Format"]);
                return;
           } 
      break;

    case "DELETE":
           
    break;

          

}


?>
