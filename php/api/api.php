<?php
echo "<pre>";

// "http://coreymaynard.com/blog/creating-a-restful-api-with-php/";

// fallback option -> show info 

  // produce filename
  $info_file = dirname($_REQUEST["path"]) . "/info.php";
  
  // use file name or fall back to global info
if (!file_exists($info_file)) {
    $info_file = 'info.php';
}
  $infopath = "api/" . $info_file;
    include $info_file ;
    exit;
