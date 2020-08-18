url='https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';
let req=new XMLHttpRequest();

let arr=[];
let height=600;
let width=1000;
let padding=40;
let xAxis;
let yAxis;
let xAxisScale;
let yAxisScale;
let xScale;
let yScale;
let tooltip=d3.select('#tooltip')
const svg=d3.select('svg')

let drawCanvas=()=>{

  svg.style('background-color', 'wheat')  
  .attr('height',height)
  .attr('width',width);
}


let drawAxes=()=>{
xAxis=d3.axisBottom(xScale)
        .tickFormat(d3.format('d'))
yAxis=d3.axisLeft(yScale)   
        .tickFormat(d3.timeFormat('%M:%S'))
svg.append('g')
    .call(yAxis)
    .attr('id','y-axis')
    .attr("transform", "translate( "+(padding)+ ",0)")

svg.append('g')
    .call(xAxis)
    .attr('id','x-axis')
    .attr("transform", "translate(0 "+(height-padding)+")")
}

let drawCircle=()=>
{

  svg.selectAll('cricle')
      .data(arr)
      .enter()
      .append('circle')
      .attr('class','dot')
      .attr('r',padding/8)
      .attr('data-xvalue',(item)=>{
        return item['Year'];
      })
        .attr('data-yvalue', (item) => {
          return new Date(item['Seconds'] * 1000)
      })
      .attr('cx',(item)=>{
        return xScale(item['Year']);
      })
      .attr('cy',(item)=>{
        return yScale(new Date(item['Seconds']*1000))
      })
      .attr('fill',(item)=>{
        if(item['Doping']!=''){
          return 'orange'
        }
        else {return 'green'}
      })
      .on('mouseover',(item)=>{
        tooltip.transition()
                .style('visibility','visible')
                if(item['Doping']!=''){
                  tooltip.text(item['Year']+'_'+item['Name']+'_'+item['Time']+'_'+item['Doping'])
                }
                else {
                  tooltip.text(item['Year']+'_'+item['Name']+'_'+item['Time']+'_'+'no doping')

                }
      })
      .on('mouseout',(item)=>{
        tooltip.transition()
                .style('visibility','hidden')
      })
}


let drawScales=()=>{
xScale=d3.scaleLinear() 
          .domain([d3.min(arr,(item)=>{
            return item['Year']-1
          }),d3.max(arr,(item)=>{
            return item['Year']+1
          })])
          .range([padding,width-padding]) ;

          yScale = d3.scaleTime()
          .domain([d3.min(arr, (item) => {
              return new Date(item['Seconds']*1000 )
          }), d3.max(arr, (item) => {
              return new Date(item['Seconds'] * 1000)
          })])
          .range([padding, height-padding])

}

req.open('GET',url,true)
req.onload=()=>{

arr=JSON.parse(req.responseText);
console.log(arr);

drawCanvas();
drawScales();
drawAxes();
drawCircle();
}

req.send();