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


// add .text('

svg.append("text")
    .text("hello world")
    .attr("text-anchor", "start")
    .attr('fill', 'gray')
    .attr('font-size', 20)
    .attr("x", 100)
    .attr('y', 140)

svg.append("text")
    .text("hello world")
    .attr("text-anchor", "middle")
    .attr('fill', 'gray')
    .attr('font-size', 20)
    .attr("x", 100)
    .attr('y', 160)

svg.append("text")
    .text("hello world")
    .attr('fill', 'gray')
    .attr('font-size', 20)
    .attr("x", 100)
    .attr('y', 180)
