
/**
 * function for left padding of numbers with characters
 * 
 * @param {any} n
 * @param {number} width
 * @param {any} char
 * @returns {string}
 */
var pad = function pad(n, width, char = " ") {
  char = char || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(char) + n;
};


/**
 * function for checking for segment intersection
 * 
 * @param {any} x1 first coordinate of first segment
 * @param {any} y1 first coordinate of first segment
 * @param {any} x2 second coordinate of first segment
 * @param {any} y2 second coordinate of first segment
 * @param {any} x3 first coordinate of second segment
 * @param {any} y3 first coordinate of second segment
 * @param {any} x4 second coordinate of second segment
 * @param {any} y4 second coordinate of second segment
 * 
 * @returns {Object} object with line intersection coordinates and whether 
 *          or not these are part of the segments' value range
 */
var line_intersect = function line_intersect(x1, y1, x2, y2, x3, y3, x4, y4)
{
    var ua, ub, denom = (y4 - y3)*(x2 - x1) - (x4 - x3)*(y2 - y1);
    if (denom == 0) {
        return null;
    }
    ua = ((x4 - x3)*(y1 - y3) - (y4 - y3)*(x1 - x3))/denom;
    ub = ((x2 - x1)*(y1 - y3) - (y2 - y1)*(x1 - x3))/denom;
    return {
        x: x1 + ua*(x2 - x1),
        y: y1 + ua*(y2 - y1),
        seg1: ua >= 0 && ua <= 1,
        seg2: ub >= 0 && ua <= 1
    };
};



/**
 * function to calculate dot product between vectors
 * 
 * @param {Array} a
 * @param {Array} b
 * @returns {Array} 
 */
var dot_product = function dot_product(a,b) {
	return a.map(function(x,i) {
		return a[i] * b[i];
	}).reduce(function(m,n) { return m + n; });
};



/**
 * function to calculate velocity vector after bouncing of wall (2d)
 * 
 * @param {Array} vector_1
 * @param {Array} vector_2
 * @param {number} [friction=1]
 * @param {number} [restitution=1]
 * 
 * @returns {Array}
 */
var bounce_of_wall = function bounce_of_wall(vector_1, vector_2, friction = 1, restitution = 1){
    var i = 0; 
    // calculate reflection velocity vector 
    var n  = [ vector_2[1], -vector_2[0] ]; 
    var up = dot_product(vector_1, n) / dot_product(n, n);
    var u  = [0,0]
        for(i = 0; i < 2; i++){
            u[i] = up * n[i];
        };

    var w = [0,0] ; 
        for(i = 0; i < 2; i++){
            w[i] = vector_1[i] - u[i];
        };
    var vector_1_prime = [0,0];
        for(i = 0; i < 2; i++){
            vector_1_prime[i] = friction * w[i] - restitution * u[i];
        };
    // return
    return vector_1_prime; 
};

