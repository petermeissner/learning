<?php
include_once 'tools.php';
include_once 'html.php';

echo "<pre>" . var_dump($_SERVER) . "</pre>";

$html = new HTML(); 
$html->put();


