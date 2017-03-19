<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php

class HTML
    {
        public $encoding = '';
        public $head = array(1,2,3);
        public $body = array(0,0,0);

        // Deklaration einer Methode
        public function printout() {
            array_walk_recursive($this->head, 'echo');
            array_walk_recursive($this->body, 'echo');
        }
    }

$a = new HTML(); 
$a->printout(); 

        ?>
    </body>
</html>
