// creating SVG
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", window.innerWidth-50 )
                                    .attr("height", window.innerHeight-50 )
                                    .style("border", "1px solid silver")
                                    .append("g")
;

svgContainer.selectAll("circle")
  .data([32, 57, 112, 293])
  .enter()
  .append("circle") 
  .style("fill", "steelblue")
  .attr("r", 10)
  .attr("cx", function(d, i) { return i * 100 + 30; })
  .attr("cy", function(d, i) { return i * 100 + 30; })
; 