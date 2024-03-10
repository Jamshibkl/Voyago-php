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
          echo "get api";die;
    break;

    case "POST":
           if(isset($_FILES['adharImg']))
           {
                $driver = $_POST['driver'];
                $email = $_POST['email'];
                $mobile = $_POST['mobile'];
                $pass = $_POST['pass2'];

                $adharId = $_POST['adharId'];
                $adharImg = time().$_FILES['adharImg']['name'];
                $adharImg_temp = $_FILES['adharImg']['tmp_name'];

                $license = $_POST['license'];
                $licenseImg = time().$_FILES['licenseImg']['name'];
                $licenseImg_temp = $_FILES['licenseImg']['tmp_name'];

                $profileImg = time().$_FILES['profileImg']['name'];
                $profileImg_temp = $_FILES['profileImg']['tmp_name'];

                $location = $_POST['location'];

                $destination1= $_SERVER['DOCUMENT_ROOT'].'/devtest/reactjs/DriverVerifyInfo/images/adhar'."/".$adharImg;
                $destination2= $_SERVER['DOCUMENT_ROOT'].'/devtest/reactjs/DriverVerifyInfo/images/license'."/".$licenseImg;
                $destination3= $_SERVER['DOCUMENT_ROOT'].'/devtest/reactjs/DriverVerifyInfo/images/New folder'."/".$profileImg;

                $result= mysqli_query($db_conn,"INSERT INTO DriverVerifyInfo (driver, email, mobile, pass, adharId, adharImg, license, licenseImg, profileImg, location )
                VALUES('$driver', '$email','$mobile', '$pass','$adharId','$adharImg','$license','$licenseImg','$profileImg','$location')");

                if($result){
                  move_uploaded_file($adharImg_temp,$destination1);
                  move_uploaded_file($licenseImg_temp,$destination2);
                  move_uploaded_file($profileImg_temp,$destination3);

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
