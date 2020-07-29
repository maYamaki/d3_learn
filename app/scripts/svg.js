//const a = document.querySelector(".canva");
const canvas = d3.select(".canva");

//add an svg element

const svg = canvas.append('svg')
            .attr('width',500)
            .attr("height", 250);

      svg.append("circle").attr("cx",104)
              .attr("cy", 150)
              .attr("r", 50)
              .attr("fill", "blue");
