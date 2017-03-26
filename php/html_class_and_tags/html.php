<?php
include_once 'tools.php';
class HTML
    {
        public $encoding = '';
        public $head = 
          array(
            "<!DOCTYPE HTML>",
            "<html>",
            "<head>",
            "</head>"
          );
        public $body = 
          array(
            "<body>",
            "content",
            "</body>",
            "</html>"
          );

        // Deklaration einer Methode
        public function put() {
            printoutn($this->head);
            printoutn($this->body);
        }
    }