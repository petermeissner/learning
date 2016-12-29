require(stringr)
require(jsonlite)

nodes <- data.frame(  id=1:10, 
                      size=runif(10,1,10), 
                      label=LETTERS[1:10])

links <- data.frame(  from=c(1:3,10:1, round(runif(10,1,10))), 
                      to=c(10:1, 10:8, round(runif(10,1,10)))
                      )

links_agg <- aggregate( links,  
                        by=list(links$from,links$to), 
                        FUN=function(x) sum(!is.na(x))
                        )[,1:3]
names(links_agg) <- c("from","to","n")

data <- list(nodes=nodes, links=links, links_agg=links_agg)
data 

data_json <- toJSON(data)
writeLines(data_json, "d3network001.json")
cat(str_replace_all(str_replace_all(data_json, "\\{" , "\n\\{"),'\\],"','\\],"\n\n'))

