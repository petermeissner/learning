<?php 

# log to file 
date_default_timezone_set('UTC');
file_put_contents(
  $filename = "apiaccess.log",
  $data = gmdate('Y-m-d H:i:s') . ", " . basename(__FILE__) . "\n",
  FILE_APPEND | LOCK_EX
);

# array to be returned as JSON
$res = [];

# info 
$res["info"] = "api/info.php";

# return result to user
header('Content-Type: application/json'); 
echo json_encode($res);
