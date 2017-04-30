
                var Matrix = function(array=[], rows=0, columns=0){
                     // check inputs 
                     if(array.length !== rows * columns){
                        throw "matrix: array.length does not fit dimensions (rows * columns)"
                     }

                    // create matrix object 
                    let matrix = {
                        data:    array,
                        columns: columns,
                        rows:    rows,
                        get:     function(row, column){
                            // check inputs
                            if(row > this.rows || row < 1){
                                throw "matrix.get(): row requested out of range";
                            }
                            if(column > this.columns || column < 1 ){
                                throw "matrix.get(): column requested out of range";
                            }
                            
                            // calculate index 
                            let index = ( (row-1) * this.rows ) + column - 1; 
                            
                            // retrieve data from 
                            let res   = this.data[index];
                            
                            // return
                            return res;
                          },
                          set:     function(row, column, value){
                            // check inputs
                            if(row > this.rows || row < 1){
                                throw "matrix.get(): row requested out of range";
                            }
                            if(column > this.columns || column < 1 ){
                                throw "matrix.get(): column requested out of range";
                            }
                            
                            // calculate index 
                            let index = ( (row-1) * this.rows ) + column - 1; 
                            
                            // replace data at index 
                            let res   = [];
                            res[0] = this.data[index];
                            res[1] = value;
                            this.data[index] = value;
                            
                            // return
                            return res;
                          }
                    };

                    return matrix;
                }
