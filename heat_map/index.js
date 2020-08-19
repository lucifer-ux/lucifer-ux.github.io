let url='https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'
let req=new XMLHttpRequest();
let xAxis;
let xAxisScale;
let yAxis;
let yAxisScale;
let values=[];
let height=500;
let width=1000;
let padding=50;
let svg=d3.select('svg');
let xScale;
let yScale;
let baseTemp;
let minYear; 
let maxYear;
let tooltip=d3.select('#tooltip');


let drawCanvas=()=>{
 svg.style('background-color','#339999')
    .attr('height',height)
    .attr('width',width)

}
let createScales=()=>{


    

    xScale=d3.scaleLinear()
                    .domain([d3.min(values,(item=>{
                        return item['year']+1
                    })),d3.max(values,(item)=>{
                        return item['year']
                    })])
                    .range([padding,width-padding])   


yScale=d3.scaleTime()          
                 .domain([new Date(0,0,0,0,0,0,0), new Date(0, 12, 0,0,0,0,0)])          
                 .range([padding,height- padding])   
    
}


let createAxes=()=>{
xAxis=d3.axisBottom(xScale)
      .tickFormat(d3.format('d'))      
yAxis=d3.axisLeft(yScale)
        .tickFormat(d3.timeFormat('%B'));
svg.append('g')
    .call(xAxis)
    .attr('id','x-axis')
    .attr("transform", "translate(0 "+(height-padding)+")")
    .style('margin-left',50)    
svg.append('g')
    .call(yAxis)
    .attr('id','y-axis')
    .attr("transform", "translate("+(padding)+",0)")    

}


let drawHeatMap=()=>{
    minYear =d3.min(values,(item)=>{
        return item['year']
        })
        
    maxYear=d3.max(values,(item)=>{
        return item['year']
    })
console.log(maxYear-minYear)
    svg.selectAll('rect')
    .data(values)
    .enter()
    .append('rect')
    .attr('class','cell')
    .attr('fill',(item)=>{
        variance=item["variance"]
        if(variance<=-1){
            return 'SteelBlue'
        }
        else if(variance<= 0)
        {
            return 'LightSteelBlue'
        }
        else if(variance<=1){
            return 'Orange'
        }
        else{
            return 'Crimson'
        }
    })
    .attr('data-year',(item)=>{
            return item['year'];
    })
    .attr('data-month',(item)=>{
        return item['month'] -1
    })
    .attr('data-temp',(item)=>{
        return baseTemp+item['variance']
    })
    .attr('height',(height-(2*padding))/12)
    .attr('y',(item)=>{
        return yScale(new Date(0, item['month']-1,0,0,0,0,0))
    })
    .attr('width',(item)=>{
        let numberOfYears= maxYear-minYear;
        return (width-(2*padding))/numberOfYears;
    })
    .attr('x',(item)=>{
        return xScale(item['year'])
    })
    .on('mouseover',(item)=>{
        tooltip.transition()
                .style('visibility','visible')
    let monthNames=[
        "January",
        "february",
        "march",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
      tooltip.text(item['year']+' '+ monthNames[item['month']-1] + '=>'+item['variance']+'C' )
      tooltip.attr('data-year',item['year'])
    })
    .on('mouseout',(item)=>{
        tooltip.transition()
                .style('visibility','hidden')
    })
}


req.open('GET',url,true)
req.onload=()=>{
let object=JSON.parse(req.responseText);
baseTemp=object['baseTemperature'];
values=object["monthlyVariance"];
console.log(baseTemp);
console.log(values);

drawCanvas();
createScales();
createAxes();
drawHeatMap();
}


req.send();












