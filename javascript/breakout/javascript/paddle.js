// paddle
var Paddle = function(my_canvas){
    
    // get the plotting context from canvas
    if( my_canvas.toString() != "[object HTMLCanvasElement]" ){
        throw("Value of my_canvas parameter seems NOT to be '[object HTMLCanvasElement]'");
    }
    var ctx = my_canvas.getContext("2d");

    // initial values
    var height     = 10;
    var width      = 75;
    var x          = (my_canvas.width - width) / 2;
    var y          =  canvas.height - height ;
    var step_width = 4; 

    // the paddle object 
    var paddle = {
        "height"     : height,
        "width"      : width,
        "position"   : {
            "x" : x,
            "y" : y
        },
        "step_width" : step_width,
        "right"      : function(){this.rightPressed;},
        "left"       : function(){this.leftPressed;},
        
        "draw"   : function draw(clean = false){
            // clean screen before drawing anew?
            if( clean === true ){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, this.width, this.height);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        },

        "move" : function(left, right){
            if( left === true ){
                if( (this.position.x - step_width) < 0 ){
                    this.position.x = 0; 
                }else{
                    this.position.x -= step_width;
                }
            }
            if( right === true ){
                if( (this.position.x + step_width) > (my_canvas.width - width) ){
                    this.position.x = my_canvas.width - width;
                }else{
                    this.position.x += step_width;
                }
            }
            // return
            return this.position;
        }
    };
    
    // return
    return paddle; 
}
