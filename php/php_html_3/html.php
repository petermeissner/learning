<?php
include_once 'tools.php';


class tag 
{
  // base structure
  private $tagname    = "";
  public  $content    = array();
  public  $attributes = array();
  private $close      = true;
  
  // initialize
  function __construct($name="", $content = array(), $attributes = array(), $close = true) {
    $this->tagname    = $name; 
    $this->content    = $content; 
    $this->attributes = $attributes; 
    $this->close      = true;
  }

  // cast as string 
  function __toString(){
    $attr_string = " ";
      $callback = function ($value, $key) use (&$attr_string) {
          $attr_string .= $key."="."'$value'" . " "; 
        };
      array_walk_recursive($this->attributes, $callback);

    $string = "<" . $this->tagname . $attr_string . ">";
          $callback = function ($value, $key) use (&$string) {
          $string .= $value . "\n"; 
        };
      $temp = array($this->content);
      array_walk_recursive($temp, $callback);

    if( $this->close ){
      $string .= "</" . $this->tagname . ">\n";
    }

    return $string;
  }
}


function newtag($name="", $content = array(), $attributes = array(), $close = true){
  $tag = new tag($name, $content, $atributes, $close);
  return $tag;
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
