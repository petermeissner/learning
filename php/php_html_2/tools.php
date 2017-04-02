<?php
// printout function
   function printoutn($input) {
       if( is_array($input) ){
        array_walk($input, 'printoutn');
      }else if( $input instanceof tag){
        echo $input->put();
      }else{
        echo $input . PHP_EOL; 
      }
      return NULL;
  }