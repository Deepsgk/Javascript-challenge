// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
console.log(tableData);
//Set tbody as vairable for <tbody> section in HTML
var tbody = d3.select("tbody");


    // Use d3 to update each cell's text with data
    tableData.forEach(function(ufodata) {
        console.log(ufodata);
        //Append row for each entry in ufodata
        var row = tbody.append("tr");
        Object.entries(ufodata).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value in the data
        var cell = tbody.append("td");

        //Insert data into a table
        cell.text(value);
        });
    });


//Selects the submit button id by selecting id="filter-btn" from the HTML
var button = d3.select("#filter-btn");
     
   //FUNCTION TO FILTER DATA
button.on("click", function() {
    tbody.html("");
    var row = d3.select("tbody").selectAll("td");
    row.remove();

    //Prevent the HTML page from refreshing
    d3.event.preventDefault();

    //Select the input element via id="datetime" from the HTML
    var inputElement = d3.select("#datetime");
    console.log(inputElement);

    //Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    let filteredData = tableData;

    //Filter the tbody for input value and console.log the filtered data
    var filtered = filteredData.filter(tbody => tbody.datetime === inputValue);
    console.log(filtered);

    //Creates filtered table 
    createTable(filtered);
});

filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
