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

class bootstrap_htmlpage extends htmlpage 
{
    // template settings
    protected $head_template_pre  = 
      array(
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">',
        '<meta name="description" content="">',
        '<meta name="author" content="">',
        '<link rel="icon" href="../../favicon.ico">',
        '<title>Dashboard Template for Bootstrap</title>',
        '<link href="/css/bootstrap.min.css" rel="stylesheet">',
        '<link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">',
        '<link href="dashboard.css" rel="stylesheet">',
        '<script src="../../assets/js/ie-emulation-modes-warning.js"></script>',
      );

    protected $head_template_post = 
      array(

      );

    protected $body_template_pre  = 
      array(
        '
            <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Export</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">Nav item</a></li>
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
            <li><a href="">Another nav item</a></li>
            <li><a href="">More navigation</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
            <li><a href="">Another nav item</a></li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Dashboard</h1>

          <div class="row placeholders">
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
          </div>

          <h2 class="sub-header">Section title</h2>
        '
      );

    protected $body_template_post = 
      array(
        '
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script>window.jQuery || document.write(\'<script src="../../assets/js/vendor/jquery.min.js"><\/script>\')</script>
          <script src="../../dist/js/bootstrap.min.js"></script>
          <script src="../../assets/js/vendor/holder.min.js"></script>
          <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
        '
      );
}

?>
