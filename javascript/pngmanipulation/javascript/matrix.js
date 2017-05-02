
                var Matrix = function(array=[], rows=0, columns=0){
                     // check inputs 
                     if(array.length !== rows * columns){
                        throw "matrix: array.length does not fit dimensions (rows * columns)"
                     }

                    // create matrix object 
                    let matrix = {
                        "data":    array,

                        "columns": columns,

                        "rows":    rows,

                        "path": {
                                    "row": [], 
                                    "column": []
                                },

                        "get":     function(row = null, column = null){
                            // check inputs
                            if(row > this.rows || row < 1){
                                throw "matrix.get(): row requested out of range";
                            }
                            if(column > this.columns || column < 1 ){
                                throw "matrix.get(): column requested out of range";
                            }

                            // calculate index 
                            let index = ( (row-1) * this.columns ) + column - 1; 
                            
                            // retrieve data from 
                            let res   = this.data[index];
                            
                            // return
                            return res;
                          },

                        "as_tableBody": function(){
                            // build tableBody 
                            let tableBody = document.createElement('tbody');
                            for (let row = 1; row <= this.rows; row++) {
                                var line = document.createElement('tr');
                                for (let column = 1; column <= this.columns; column++) {
                                    var cell = document.createElement('td');
                                        cell.appendChild(
                                            document.createTextNode(
                                                this.get(row, column)
                                            )
                                        );
                                    line.appendChild(cell);
                                }
                                tableBody.appendChild(line);
                                tableBody.style.fontFamily = "monospace"
                            }
                            // return
                            return tableBody; 
                        },

                        "random_get": function(n = 1){
                            let res = []
                            let idx = 0;
                            let col = 0;
                            let rw  = 0;

                            for (var index = 0; index < n; index++) {
                                let idx = Math.floor( Math.random() * this.data.length );
                                let col = idx % this.rows + 1;
                                let rw  = idx % this.columns + 1;
                                res.push(
                                    {
                                        index:  idx,
                                        column: col, 
                                        row:    rw, 
                                        value:  this.data[idx]
                                    }
                                );
                            }
;
                            // return 
                            return res; 
                        },

                        "step": function( steplength = 1 ){
                            
                            if( this.path.row.length===0 && this.path.column.length===0 ){
                                // make first step 
                                let step1 = this.random_get();
                                this.path.row.push( step1[0].row );
                                this.path.column.push( step1[0].column );
                            }else{
                                // make further steps
                                last_path_row    = this.path.row[this.path.row.length];
                                last_path_column = this.path.column[this.path.column.length]; 
                            }
                        }
                    };

                    return matrix;
                }
