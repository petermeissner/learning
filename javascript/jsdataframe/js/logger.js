(function () {
    // create and add pre element for logging
    var logger = document.createElement("pre");
    var element = document.getElementsByTagName("body")[0];
    element.appendChild(logger);
    // old logger function
    var old = console.log;
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
            logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();
