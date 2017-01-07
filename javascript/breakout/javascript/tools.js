
/**
 * function for left padding of numbers with characters
 * 
 * @param {any} n
 * @param {number} width
 * @param {any} char
 * @returns {string}
 */
function pad(n, width, char = " ") {
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
function line_intersect(x1, y1, x2, y2, x3, y3, x4, y4)
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
 * function to calculate velocity vector after bouncing of wall (2d)
 * 
 * @param {any} vector_1
 * @param {any} vector_2
 * @param {number} [friction=1]
 * @param {number} [restitution=1]
 * 
 * @returns {Array}
 */
function bounce_of_wall(vector_1, vector_2, friction = 1, restitution = 1){
    if( vector_1.constructor !== Array ){
        vector_1 = [
                    Object.keys(vector_1)[0], 
                    Object.keys(vector_1)[1]
                ]
    }
    if( vector_2.constructor !== Array ){
        vector_2 = [
                    Object.keys(vector_2)[0], 
                    Object.keys(vector_2)[1]
                ]
    }
    var n = [ vector_2[1], vector_2[0] ]; 
    var u = dot_product(vector_1, n) / dot_product(n, n) * n ;
    var w = vector_1 - u; 
    var vector_1_prime = friction * w - restitution * u;
    return vector_1_prime; 
};

