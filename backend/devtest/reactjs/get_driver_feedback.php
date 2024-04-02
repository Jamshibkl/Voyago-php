<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "reactjsdb");
if (mysqli_connect_error()) {
  echo mysqli_connect_error();
  exit();
} else {
  $driver_id = isset($_GET['driver_id']) ? $_GET['driver_id'] : "";

  $feedbacks = [];
  if (!empty($driver_id)) {
    $sql = "SELECT * FROM feedback WHERE driver_id = '$driver_id'";
    $result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_assoc($result)) {
      $feedbacks[] = $row;
    }
  }

  echo json_encode($feedbacks);
  $conn->close();
}
?>
