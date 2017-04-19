<?php
include_once 'tools.php';
include_once 'html.php';


$htmlpage = new bootstrap_page();
$htmlpage->add_to_body("ola");
$htmlpage->menu(array(home=>"index.html", zwo=>"dings.html"));
$htmlpage->put();




