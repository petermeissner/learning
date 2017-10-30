/* source : keith - html5 for web designers */

element_supports_attribute = function(element, attribute){
    let test = document.createElement(element);
    if ( attribute in test ){
        return true;
    } else {
        return false;
    }
}

