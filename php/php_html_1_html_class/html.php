<?php
include_once 'tools.php';
class HTML
    {
        private $encoding = '';
    
        // base structure of head
        public $head = 
          array(
            "<!DOCTYPE HTML>",
            "<html>",
            "<head>",
                content=>array(),
            "</head>"
          );
        
        // base structure of body
        public $body = 
          array(
            "<body>",
                content=>array(),
            "</body>",
            "</html>"
          );

        // print out content
        public function put() {
            printoutn($this->head);
            printoutn($this->body);
        }
        
        // add content 
        public function add($what, $where) {
            
        }
        
        // constructor / intitilize
        function __construct() {
            // setting for encoding
            $encoding = "<meta charset='UTF-8'></meta>";
            $this->html = 
              array(
                $this->head, 
                $this->body
              );
            $this->head['content']['encoding'] = $encoding;
        }
    }
?>    
    
    
    
   
    
    
    