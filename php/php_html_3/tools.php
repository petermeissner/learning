<?php
// printout function
   function printoutn($input) {
      if( is_array($input) ){
        array_walk($input, 'printoutn');
      }else{
        try {
          echo $input . PHP_EOL; 
        } catch(Exception $e) {
          echo $e . "\n";
          var_dump($input);
          exit();
        }
        
      }
      return NULL;
  }