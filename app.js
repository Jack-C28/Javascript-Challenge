// YOUR CODE HERE!
// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Display the table

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the filter button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
submit.on("click", function() {

// Remove existing table
d3.select("tbody").html("");

// Prevent refresh of page
d3.event.preventDefault();

// Return value of text input
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// Filter results
var filteredResults = tableData.filter(record => record.datetime === dateTime);
console.log(filteredResults);

// Display the filtered results
filteredResults.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});