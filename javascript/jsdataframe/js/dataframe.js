function Person(first, last, age, eyecolor) {
    this.firstName = first || "";
    this.lastName = last || "";
    this.age = age || 0;
    this.eyeColor = eyecolor;
}


function Dataframe() {
   // number of columns = number of arguments
    this.ncol    = arguments.length;
    this.lengths      = []; 
    
    // get lengths
    for(i = 0; i < arguments.length; i++){
      this.lengths.push(arguments[i].length);
    }
    
    var args = Array.prototype.slice.call(arguments);
    this.types        = []; 
    
    for(i = 0; i < args.length; i++){
      this.types.push(typeof(args[i]));
    }
    
    var internal_data = [];
    this.get_data = function(){
        return internal_data;
    };
    
    
}