

/**
 * 
 * 
 * @param {any} my_canvas
 * @returns {Object} a ball to let bounce around
 */
function Ball(my_canvas){
    // get the plotting context from canvas
    if( my_canvas.toString() != "[object HTMLCanvasElement]" ){
        throw("Value of my_canvas parameter seems not to be '[object HTMLCanvasElement]'");
    }
    var ctx = my_canvas.getContext("2d");

    // 
    var my_canvas_left_border = {
        "borders" : [
                {
                    "x1" : 0, 
                    "x2" : 0, 
                    "y1" : 0, 
                    "y2" : my_canvas.height
                }
            ]
        };

    var my_canvas_right_border = {
            "borders" : [
                {
                    "x1" : my_canvas.width, 
                    "x2" : my_canvas.width, 
                    "y1" : 0, 
                    "y2" : my_canvas.height
                }
            ]
        };

        var my_canvas_top_border  = {
            "borders" : [
                {
                    "x1" : 0, 
                    "x2" : my_canvas.width, 
                    "y1" : 0, 
                    "y2" : 0
                }
            ]
        };

        var my_canvas_bottom_border  = {
            "borders" : [
                {
                    "x1" : 0, 
                    "x2" : my_canvas.width, 
                    "y1" : my_canvas.height, 
                    "y2" : my_canvas.height
                }
            ]
        };


    // the ball object
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
            // clean screen before drawing anew?
            if( clean === true ){
                ctx.clearRect(0, 0, my_canvas.width, my_canvas.height);
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

        // checks if there will be a collision with registered objects
        "collision" : function collision(){
            var old_pos = this.position;
            var new_pos = this.simulate_move();

            for( i = 0; i < this.colliders.length; i++ ){
                var collider_names = this.colliders.names[i];

                var n_borders = 
                    this.colliders.list[collider_names].borders.length;

                for( k = 0; k < n_borders; k++ ){
                    var border = 
                        this.colliders.list[this.colliders.names[i]].borders[k];

                    var intersect = 
                        line_intersect(
                            old_pos.x, old_pos.y, 
                            new_pos.x, new_pos.y, 
                            border.x1, border.y1, 
                            border.x2, border.y2
                        );
                    
                    if(intersect.seg1 && intersect.seg2){
                       var new_direction = 
                            bounce_of_wall(
                                vector_1 = [this.direction.dx, this.direction.dy],
                                vector_2 = [border.x2 - border.x1, border.y2 - border.y1]
                            );
                        this.direction.dx = new_direction[0];
                        this.direction.dy = new_direction[1];
                    }
                }
            }
            return false;
        },

        // objects with a position object 
        // with attributes x and y 
        // for which collision should be checked
        "colliders" : {
            "list" : {},
            "names" : [],
            "length" : 0,
            "add" : function(object, name){
                this.list[name] = object;
                this.names.push(name);
                this.length += 1;
                return name;
            }
        }, 

        "game_over" : function game_over(){
            console.log("game-over.");
        }
    }

    
    // add canvas boundaries as first colliders
    ball.colliders.add(my_canvas_left_border, "left");
    ball.colliders.add(my_canvas_right_border, "right");
    ball.colliders.add(my_canvas_top_border, "top");
    ball.colliders.add(my_canvas_bottom_border, "bottom");
    
    // return
    return ball; 
}
