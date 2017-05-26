<?php 

echo $_REQUEST["path"];
if( basename($_REQUEST["path"]) === "info" ){
    // produce filename
    $info_file = dirname($_REQUEST["path"]) . "/info.php"; 
    // use file name or fall back to global info
    if( !file_exists($info_file) ){
      $info_file; 'info.php';
    }
    $infopath = "api/" . $info_file;
    include $info_file ;
    exit;
}

echo "<pre>SERVER\n";
var_dump($_REQUEST);
echo "\n-------</pre>";

echo "http://coreymaynard.com/blog/creating-a-restful-api-with-php/";

