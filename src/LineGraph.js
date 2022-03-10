import React, { useEffect } from "react";
import * as d3 from "d3";
import { geoNaturalEarth1 } from "d3";

function LineGraph() {

  const createGraph = async () => {

    // read data from csv and format variables
    let data = await d3.csv('https://raw.githubusercontent.com/Het-Patel/vergo/main/dataprep/testData.sto?token=GHSAT0AAAAAABSHQPQ4IGBFQXPWQPEQBYMYYRTUYYA')
    let data1 = await d3.csv('https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv')
    
    let row = []
    data.forEach((d) => {
      d = JSON.stringify(d)
      let tempData = d.split(":")[1]
      // console.log(tempData)
      tempData = tempData.replace(/[&#,+()$~%.'":*?<>{}]/g, '')
      row.push(tempData)
    })
    let help = []
    row.forEach((d)=> {
      let tempData = {date: d.split("\\t")[0], value: d.split("\\t")[1]}
      help.push(tempData)
    })
  
    // data.forEach((d) => {
    //   help.date = d3.tsvParse()
    //   help.value = +help.value;
    // });
    // console.log(data)

    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 20, bottom: 50, left: 70 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // add X axis and Y axis
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    x.domain(d3.extent(data, (help) => { return help.date; }));
    y.domain([0, d3.max(data, (help) => { return help.value; })]);
  
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .call(d3.axisLeft(y));
      
    // add the Line
    var valueLine = d3.line()
    .x((help) => { return x(help.date); })
    .y((help) => { return y(help.value); });
    console.log(valueLine)

    svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("help", valueLine);
    svg.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height + 50)
      .text("Date");
    svg.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("Pain Level");

  }

  useEffect(() => {
    createGraph();
  }, []);

  return (
    <>

    </>
  );
}

export default LineGraph