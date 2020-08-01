const canvas = d3.select(".canva");
/*
JSON - Javascript Object Nortation
*/


var dataArray = [
  {"width": 25, "height": 4, "fill": "pink"},
  {"width": 25, "height": 14, "fill": "purple"},
  {"width": 25, "height": 44, "fill": "red"},
  {"width": 25, "height": 34, "fill": "blue"}
]

//add an svg element
const svg = canvas.append('svg')
            .attr('width',500)
            .attr("height", 600);

const rect = svg.selectAll('rect');

rect.data(dataArray)
    .enter().append("rect")
    .attr("width",24)
    .attr("fill",  (d, i) => d.fill)
    .attr("height",d => d.height*2)
    .attr("x", function(d, i){
      console.log(d);
       return i*25;})
    .attr("y", function(d, i){ return 100 -(d.height*2);});
