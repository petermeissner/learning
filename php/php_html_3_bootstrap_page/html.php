<?php
include_once 'tools.php';


// basic class for tags 
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



// basic class for HTML pages 
class htmlpage
    {
        // template settings
         protected $head_template_pre  = array();
         protected $head_template_post = array();
         protected $body_template_pre  = array();
         protected $body_template_post = array();


        // setting character encoding of page
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
        protected function add($what, $where="body") {
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
                  encoding => $encoding,
                  head_template_pre => $this->head_template_pre,
                  content => array(),
                  head_template_post => $this->head_template_post,
                "</head>"
              );

            // $this->head['content']['encoding'] = $encoding;

            // buidling up body
            $this->body = 
              array(
                "<body>",
                  body_template_pre => $this->body_template_pre,
                  content => array(),
                  body_template_post => $this->body_template_post,
                "</body>",
                "</html>"
              );

              // html 
              $this->html = array(&$this->head, &$this->body);

        }
    }




// a class for an HTML page with bootstrap included
class bootstrap_page extends htmlpage 
{
    // template settings
    protected $head_template_pre  = 
      array(
'<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">'
          );

    protected $head_template_post = 
      array(
'<title>Bootstrap 101 Template</title>
<link href="css/bootstrap.css" rel="stylesheet">'
          );

    protected $body_template_pre =
      array(
'
<nav class="navbar  navbar-inverse navbar-fixed-left">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
      </button>
      <a class="navbar-brand" href="/">Bootstrap Template Experiments</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
      </ul>
    </div>
  </div>
</nav>
<div class="col-sm-3 col-md-2 sidebar">
',
menu => array(),
'</div>
'
          );
       
    protected $body_template_post = 
      array(
'<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>'
      );


  // constructor 
  public function __construct()
    {
      // call ancestor constructor
      parent::__construct();
    }


  // function for adding menu to page
  public function menu($what = array())
    {
      $menu = "";
      if( is_array($what) ){
        foreach ($what as $key => $value) {
          $menu .= "\n  <li>" . "<a href='$value'>" . $key . "</a>" . "</li>"  ;
        }
      }else{
        $menu .= "  <li>" . "<a href='#$what'>" . $what ."</a>" . "</li>" . "\n";
      }
      $this->body["body_template_pre"]["menu"] = "<ul class='nav'>" . $menu . "\n</ul>";
    }

}

?>
