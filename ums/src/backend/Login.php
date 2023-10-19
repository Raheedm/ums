<?php
header("Content-Type: application/json");

// Get POST data from the frontend
$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

// Connect to your MySQL database (replace with your database credentials)
$mysqli = new mysqli("localhost", "root", "M@heera786", "internship");

if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}

// Prepare and execute a SQL query to check if the user exists
$sql = "SELECT * FROM users WHERE emp_email = '$email' AND emp_pswd = '$password'";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
  // User exists, return user data as JSON response
  $user = $result->fetch_assoc();
  echo json_encode(array("success" => true, "user" => $user));
} else {
  // User does not exist or incorrect credentials, return an error message as JSON
  echo json_encode(array("success" => false, "message" => "Invalid email or password"));
}

$mysqli->close();
?>
