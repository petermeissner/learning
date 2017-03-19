<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of html
 *
 * @author peter
 */
class html
{
    public $encoding = '';
    public $head = array(1,2,3);
    public $body = array();

    // Deklaration einer Methode
    public function printout() {
        array_walk_recursive($this->head, 'echo');
        array_walk_recursive($this->body, 'echo');
    }
}
