<?php
 /**
  * tools
  *
  */


 /**
  * list files in directory
  *
  * @param $path the path to list files
  *
  *
  */
function list_files($path = ".", $pattern = null, $sort = 0, $recursive = false)
{
    // get list of files and dots and directories
    $scandir_res = scandir($path, $sort);
    
    // throw out dots
    $scandir_res = array_diff($scandir_res, array('..', '.'));
    
    // throw out directories
    foreach ($scandir_res as $key => $value) {
        if (is_dir($value)) {
            unset($scandir_res[$key]);
        }
    }
    
    // apply pattern
    if (!is_null($pattern)) {
        $scandir_res = preg_grep($pattern, $scandir_res);
    }
    
    // return
    return array_values($scandir_res);
};



 /**
  * list directories
  *
  * @param $path the path to list files
  *
  *
  */
function list_dirs($path = ".", $pattern = null, $sort = 0, $recursive = false)
{
    // get list of files and dots and directories
    $scandir_res = scandir($path, $sort);
    
    // throw out dots
    $scandir_res = array_diff($scandir_res, array('..', '.'));
    
    // throw out directories
    foreach ($scandir_res as $key => $value) {
        if (is_file($value)) {
            unset($scandir_res[$key]);
        }
    }

    // apply pattern
    if (!is_null($pattern)) {
        $scandir_res = preg_grep($pattern, $scandir_res);
    }
    

    // return
    return array_values($scandir_res);
};
