
//const a = document.querySelector(".canva");
const canvas = d3.select(".canva");

var dataArray = [4,15,34];

//add an svg element

const svg = canvas.append('svg')
            .attr('width',500)
            .attr("height", 250);


const rect = svg.append("rect");

rect.attr("width", 24)
    .data(dataArray)
    .attr("fill", "orange")
    .attr("height", 100)
    .attr('y', function (d, i) {
                        console.log(i);
                        return  d*12;
            })
    .attr("x", function(d, i) {console.log(d) return d*90;});
