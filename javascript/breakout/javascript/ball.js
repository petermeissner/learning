// constructor for a bouncing ball 

var Ball = function(my_canvas){
    // get the plotting context from canvas
    if( my_canvas.toString() != "[object HTMLCanvasElement]" ){
        throw("Value of my_canvas parameter seems not to be '[object HTMLCanvasElement]'");
    }
    var ctx = my_canvas.getContext("2d");
    var ball = {
        "position" : {
            "x" : 10  ,
            "y" : 10 
        },

        "direction" : {
            "dx": 0, 
            "dy": 0
        },

        "radius" : 10,
        
        // method : move 
        "move" : function( dx, dy){
            // update directions
            if( dx ){
                this.direction.dx = dx;
            }
            if( dy ){
                this.direction.dy = dy;
            }

            // collision checking
            this.collision(); 

            // update position
            this.position.x += this.direction.dx;
            this.position.y += this.direction.dy; 
        
            // return new coordinates
            return this.position;
        },

        // method : simulate movement
        "simulate_move" : function(){
            return {
                "x" : this.position.x + this.direction.dx,
                "y" : this.position.y + this.direction.dy
            };
        },
        
        // method : draw
        "draw" : function draw( clean = false){
            if( clean === true ){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            ctx.beginPath();
            ctx.arc(
                x          = this.position.x, 
                y          = this.position.y, 
                radius     = this.radius, 
                startAngle = 0, 
                endAngle   = Math.PI*2
            );
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        },

        // checks if there will be a collision AND changes directions accordingly
        "collision" : function collision(){
            var new_pos = this.simulate_move();
            var collision = {
                "all" : false,
                "x"   : false,
                "y"   : false
            } 
            if( 
                new_pos.x + this.radius >= my_canvas.width | 
                new_pos.x - this.radius < 0 
            ){
                this.direction.dx = -1 * this.direction.dx;
                collision.all = true; 
                collision.x   = true; 
            }
            if( 
                new_pos.y + this.radius >= my_canvas.height | 
                new_pos.y - this.radius < 0 
            ){
                this.direction.dy = -1 * this.direction.dy;
                collision.all = true; 
                collision.y   = true; 
            }
            return collision;
        },

        // method for letting time pass
        "tick" : function(times=1){
            for(i = 1; i <= times; i += 1){
                this.move()
            }
        }
    }
    return ball; 
}
