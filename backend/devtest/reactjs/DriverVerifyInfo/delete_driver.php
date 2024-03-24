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
  case "DELETE":
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    if ($id !== null) {
      $sql = "DELETE FROM driververifyinfo WHERE id = $id";
      $result = mysqli_query($db_conn, $sql);

      if ($result) {
        echo json_encode(array("success" => "Driver deleted successfully!"));
      } else {
        echo json_encode(array("error" => "Error deleting driver."));
      }
    } else {
      echo json_encode(array("error" => "Invalid request."));
    }
    break;

  default:
    echo json_encode(array("error" => "Invalid request method."));
}
?>
