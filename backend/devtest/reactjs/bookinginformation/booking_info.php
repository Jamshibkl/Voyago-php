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
      // $path= explode('/', $_SERVER['REQUEST_URI']);

      // if(isset($path[4]) && is_numeric($path[4]))
      // {
      //   echo "Get Api Single Row"; die;
      // } else {
      //  //echo "return all Data"; die;
      
      //  $allproduct= mysqli_query($db_conn, "SELECT * FROM driververifyinfo");
      //  if(mysqli_num_rows($allproduct) > 0)
      //  {
      //     while($row= mysqli_fetch_array($allproduct))
      //     {
      //       $json_array["productdata"][]= array("id"=>$row['id'], 
      //       "driver"=>$row["driver"],
      //      "email"=>$row["email"],
      //      "mobile"=>$row["mobile"],
      //      "adharId"=>$row["adharId"],
      //      "profileImg"=>$row["profileImg"],
      //      "adharImg"=>$row["adharImg"],
      //      "licenseImg"=>$row["licenseImg"],
      //      "license"=>$row["license"],
      //      "location"=>$row["location"]
      //     );
      //     }
      //     echo json_encode($json_array["productdata"]);
      //     return;
      //  } else {
      //   echo json_encode(["result"=>"please check the Data"]);
      //   return;
      //  }


      // }
      
    break;

    case "POST":
           if(isset($_POST['driverId']))
           {
                $driverId = $_POST['driverId'];
                $driverName = $_POST['driverName'];
                $driverEmail = $_POST['driverEmail'];
                $driverMobile = $_POST['driverMobile'];
                $randomNum = $_POST['randomNum'];




                // $destination1= $_SERVER['DOCUMENT_ROOT'].'/devtest/reactjs/DriverVerifyInfo/images/adhar'."/".$adharImg;
                // $destination2= $_SERVER['DOCUMENT_ROOT'].'/devtest/reactjs/DriverVerifyInfo/images/license'."/".$licenseImg;
                // $destination3= $_SERVER['DOCUMENT_ROOT'].'/devtest/reactjs/DriverVerifyInfo/images/Profile'."/".$profileImg;

                $result= mysqli_query($db_conn,"INSERT INTO bookingInfo (driverId, driverName, driverEmail, driverMobile, randomNum )
                VALUES('$driverId', '$driverName','$driverEmail', '$driverMobile','$randomNum')");

                if($result){
                  // move_uploaded_file($adharImg_temp,$destination1);
                  // move_uploaded_file($licenseImg_temp,$destination2);
                  // move_uploaded_file($profileImg_temp,$destination3);

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