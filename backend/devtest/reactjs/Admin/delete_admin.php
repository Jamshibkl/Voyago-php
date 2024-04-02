<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "reactjsdb");
if(mysqli_connect_error()){
    echo json_encode(array("error" => "Database connection error."));
    exit();
}

$eData = file_get_contents("php://input");
$dData = json_decode($eData, true);

$id = isset($dData['id']) ? $dData['id'] : "";

$result = "";

if($id != ""){
    $sql = "DELETE FROM admin WHERE id = $id";
    $res = mysqli_query($conn, $sql);
    if($res){
        $result = "Customer deleted successfully!";
    } else {
        $result = "Error deleting customer.";
    }
} else {
    $result = "Invalid request.";
}

$conn->close();
echo json_encode(array("result" => $result));
?>
