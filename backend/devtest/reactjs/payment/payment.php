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
           if(isset($_POST['userName']))
           {
                $userName = $_POST['userName'];
                $driverid = $_POST['driverid'];
                $transactionId = $_POST['transactionId'];
                $amount = $_POST['amount'];

                $result= mysqli_query($db_conn,"INSERT INTO transaction (userName, driverid, transactionId,amount )
                VALUES('$userName', '$driverid','$transactionId','$amount')");

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
