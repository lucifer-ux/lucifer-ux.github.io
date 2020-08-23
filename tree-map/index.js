let movieDataUrl = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json'

let movieData

let canvas = d3.select('#canvas')
let tooltip= d3.select('#tooltip')
let drawTreeMap = () => {

    let hierarchy = d3.hierarchy(movieData, 
        (node) => {
            return node['children']
        }
    ).sum(
        (node) => {
            return node['value']
        }
    ).sort(
        (node1, node2) => {
            return node2['value'] - node1['value']
        } 
    )

    
    d3.treemap()
      .size([1000,600])
      (hierarchy)
  
  let movieTiles = hierarchy.leaves()
  console.log(movieTiles)


  let block = canvas.selectAll('g')
                .data(movieTiles)
                .enter()
                .append('g')
                .attr("transform",(movie)=>{
                    return 'translate('+ movie['x0']+ ', '+ movie['y0']+')'
                } )

block.append('rect')
      .attr('class', 'tile')
      
      .attr('fill', (movie) => {
        let category = movie['data']['category']
        if(category === 'Action'){
            return 'orange'
        }else if(category === 'Drama'){
            return 'lightgreen'
        }else if(category === 'Adventure'){
            return 'crimson'
        }else if(category === 'Family'){
            return 'steelblue'
        }else if(category === 'Animation'){
            return 'pink'
        }else if(category === 'Comedy'){
            return 'khaki'
        }else if(category === 'Biography'){
            return 'tan'
        }
    })


    .attr('data-name', (movie) => {
        return movie['data']['name']
    })
    .attr('data-category', (movie) => {
        return movie['data']['category']
    })
    .attr('data-value', (movie) => {
        return movie['data']['value']
    })


    .attr('data-name', (movie) => {
        return movie['data']['name']
    })
    .attr('data-category', (movie) => {
        return movie['data']['category']
    })
    .attr('data-value', (movie) => {
        return movie['data']['value']
    })
    .attr('width',(movie)=>{
        return movie['x1'] - movie['x0']
    })
    .attr('height', (movie)=>{
        return movie['y1'] - movie['y0']
    })
    .on('mouseover',(movie)=>{
        tooltip.transition()
                .style('visibility','visible')

                let movieData = movie['data']
  
      tooltip.text(
          movieData['name'] + ' : $' + movieData['value']
      )
      tooltip.attr('data-value',movie['data']['value'])  
    })

  
  
    .on('mouseout',(movie)=>{
        tooltip.transition()
                .style('visibility', 'hidden')
    })

block.append('text')
     .text((movie)=>{
         return movie['data']['name']
     })         
     .attr('x',5)
     .attr('y',20)


}   

d3.json(movieDataUrl).then(
    (data, error) => {
        if(error){
            console.log(error)
        } else {
            movieData = data
            console.log(movieData)
            drawTreeMap()
        }
    }
)