<?php
include_once 'tools.php';
include_once 'html.php';

$html = new HTML();
$tag = new tag($name = "p", "Wohoooo!", $attributes = array(style => "font-size: 150%;"));
$html->add_to_body($tag);
$html->put();





