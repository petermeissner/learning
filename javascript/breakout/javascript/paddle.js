// paddle
var Paddle = function(my_canvas){
    
    var i = 0;

    // get the plotting context from canvas
    if( my_canvas.toString() != "[object HTMLCanvasElement]" ){
        throw("Value of my_canvas parameter seems NOT to be '[object HTMLCanvasElement]'");
    }
    var ctx = my_canvas.getContext("2d");

    // initial values
    var height     = 10;
    var width      = 75;
    var x          = (my_canvas.width - width) / 2;
    var y          =  my_canvas.height - height ;
    var step_width = 4; 

    // the paddle object 
    var paddle = {
        "height"     : height,
        "width"      : width,
        "position"   : {
            "x" : x,
            "y" : y
        },
        "borders" : [
            {
                "x1" : x,
                "y1" : y,
                "x2" : x + width,
                "y2" : y
            },
            {
                "x1" : x,
                "y1" : y,
                "x2" : x ,
                "y2" : y + 30
            },
            {
                "x1" : x + width,
                "y1" : y,
                "x2" : x + width,
                "y2" : y + 30
            }
        ],
        "step_width" : step_width,
        "right"      : function(){this.rightPressed;},
        "left"       : function(){this.leftPressed;},
        
        "draw"   : function draw(clean = false){
            // clean screen before drawing anew?
            if( clean === true ){
                ctx.clearRect(0, 0, my_canvas.width, my_canvas.height);
            }
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, this.width, this.height);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        },

        "move" : function(left, right){
            // move to left and update position
            if( left === true ){
                if( (this.position.x - step_width) < 0 ){
                    this.position.x = 0; 
                }else{
                    this.position.x -= step_width;
                }
            }
            // move to right and update position
            if( right === true ){
                if( (this.position.x + step_width) > (my_canvas.width - width) ){
                    this.position.x = my_canvas.width - width;
                }else{
                    this.position.x += step_width;
                }
            }
            
            // update borders
            this.borders[0].x1 = this.position.x;
            this.borders[0].y1 = this.position.y;
            this.borders[0].x2 = this.position.x + this.width;
            this.borders[0].y2 = this.position.y;

            this.borders[1].x1 = this.position.x;
            this.borders[1].y1 = this.position.y;
            this.borders[1].x2 = this.position.x;
            this.borders[1].y2 = this.position.y + 30;
            
            this.borders[2].x1 = this.position.x + this.width;
            this.borders[2].y1 = this.position.y;
            this.borders[2].x2 = this.position.x + this.width;
            this.borders[2].y2 = this.position.y + 30;

            // return
            return this.position;
        },
        
        "collision" : function(){}
    };
    
    // return
    return paddle; 
}
