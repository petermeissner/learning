
/**
 * 
 * 
 * @param {any} my_canvas
 * @returns {Object} a ball to let bounce around
 */
function Tile(my_canvas, x, y){
    // get the plotting context from canvas
    if( my_canvas.toString() != "[object HTMLCanvasElement]" ){
        throw("Value of my_canvas parameter seems not to be '[object HTMLCanvasElement]'");
    }
    var ctx = my_canvas.getContext("2d");

    // the ball object
    var tile = {
        "position" : {
            "x" : x  ,
            "y" : y
        },
        // method : draw
        "draw"   : function draw(clean = false){

            // clean screen before drawing anew?
            if( clean === true ){
                ctx.clearRect(0, 0, my_canvas.width, my_canvas.height);
            }
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, 20, 7);
            ctx.fillStyle = "#f5ff75";
            ctx.fill();
            ctx.closePath();
        },
    }

   
    // return
    return tile; 
}
