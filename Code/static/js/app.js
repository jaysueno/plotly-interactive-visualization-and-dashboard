// Plotly application to showcase my skills in creating engaging visualization and a web dashboard 
// Written by Jay Sueno

// read in the json file using "d3.json()" and assign to a variable to be able to call later
var dataFile = d3.json("../data/samples.json").then(function(data) 
    {console.log("json data file read", data)});

// optionChanged() is a function in the drop down dial box
// id for listener ".selDataset"

// create a listener for the dropdown menue and assign it a variable for future use
var dropdown = d3.select(".selDataset");

// append the dropdown menu to include all the names of the dataset using D3
// we will use the .append() function to the "<select></>" node

