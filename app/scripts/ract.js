const canvas = d3.select(".canva");

const svg = canvas.append("svg")
              .attr("width", 400)
              .attr("height", 250);

svg.append("rect")
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "orange")
  .attr('x',40)
  .attr('y',30);

svg.append("circle")
  .attr("cx", 40)
  .attr("cy", 50)
  .attr('r', 30);
