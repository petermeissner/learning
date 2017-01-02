var Score = function Score( element ){
    this.element = element; 
    var score =  {
        "element" : this.element,
        "score"   : 0,
        "write"   : function(element = this.element){
            var score_text     = pad(this.score, 9, "0"); 
            var score_filler   = "<span class='score_filler'> </span>";
            element.innerHTML  = 
                score_text.slice(0,3) + 
                score_filler + 
                score_text.slice(3,6) + 
                score_filler + 
                score_text.slice(6,9); 
        },
        "add"     : function(a=0){
            this.score += a;
            this.write();
            return this.score;
        },
        "reset"   : function(){
            this.score = 0;
            this.write();
            return 0;
        }
    };
    // return 
    return score;
};
