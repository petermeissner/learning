<?php
include_once 'tools.php';


// helper function to generate list of key value pairs in html tag attribute format
function make_attribute_string( $attributes = array()){
  // paste together key=value pairs
  $string_out = "";
  foreach($attributes as $key => $value){
      $string_out .= " " . $key . "='" . $value . "'";
  }
  // ensure there is a starting space
  if($string_out !== ""){
    $string_out = " " . $string_out;
  }

  // return
  return $string_out;
}

class tag 
{
  // print out content
  public function put() {
      printoutn($this->tag);
  }

  // base structure
  public $tag = array();
  
  // initialize
  function __construct($name="", $content = array(), $attributes = array(), $close = true) {
    array_push(
      $this->tag, 
      "<" . $name . make_attribute_string($attributes) . ">"
    );
    array_push( $this->tag, $content);
    if( $close ){
      array_push( $this->tag, "</" . $name . ">");
    }
  }

  // cast as string 
  function __toString(){
    implode($this->tag, "\n");
  }
}

class HTML
    {
        public $encoding;
    
        // base structure of head
        public $head = array();
        public $body = array();
        public $html = array();
          

        // print out content
        public function put() {
            printoutn($this->html);
        }
        
        // add content to head, body, ...
        private function add($what, $where="body") {
            if( $where === "body" ){
              array_push($this->body["content"], $what);
            }else if ( $where === "head" ){
              array_push($this->head["content"], $what);
            }else{
              throw new Exception('do not know where to add this');
            }
        }

        // add to body 
        public function add_to_body($what){
          $this->add($what, "body");
        }

        // add to head
        public function add_to_head($what){
          $this->add($what, "head");
        }

        
        // constructor / intitilize
        function __construct() {
            // setting for encoding
            $encoding = "UTF-8"; 
            $this->encoding = $encoding;

            // building up head
            $encoding = "<meta charset='". $encoding ."'>";
            $this->head = 
              array(
                "<!DOCTYPE HTML>",
                "<html>",
                "<head>",
                  content => array(),
                "</head>"
              );

            $this->head['content']['encoding'] = $encoding;

            // buidling up body
            $this->body = 
              array(
                "<body>",
                  content => array(),
                "</body>",
                "</html>"
              );

              // html 
              $this->html = array(&$this->head, &$this->body);

        }
    }

// TODO: links zu scripten anpassen!!!
?>
