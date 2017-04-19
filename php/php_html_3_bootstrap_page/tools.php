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



// function to replace value for certain keys 
function key_replace_recursive(&$array, $search_key, $new_value)
  {
    // helper function 
    function test(&$item, $key, $userdata)
      {
        if( $key === $userdata[0] ) {
            $item = $userdata[1];
        }
      }
    
    // applying function to array
    array_walk_recursive(
        $array    = $array, 
        $callback = 'test', 
        $userdata = array($search_key, $new_value)
    );
  }

