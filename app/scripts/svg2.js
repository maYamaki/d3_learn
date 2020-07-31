
//const a = document.querySelector(".canva");
const canvas = d3.select(".canva");

var dataArray = [4,15,34];

//add an svg element

// const svg = canvas.append('svg')
//             .attr('width',500)
//             .attr("height", 250);

const svg = canvas.select('svg');

// const rect = svg.append("rect");
const rect = svg.selectAll('rect');

rect.attr("width", 24)
    .data(dataArray)
    .attr("fill", "orange")
    .attr("height", function(d){
      return d*2;
    })
    // .attr('y', function (d, i) {
    //                     return  d;
    //         })
    .attr("x", function(d, i) {
                                return i*25;});
console.log(rect);
