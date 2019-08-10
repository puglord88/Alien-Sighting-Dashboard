// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function() {
    
    var tbody = d3.select("tbody");
    tbody.html("");


    var inputDates = d3.select("#datetime");

    var valueDates = inputDates.property("value");

    console.log(valueDates);
    console.log(tableData);

    var filteredDates = tableData.filter(sighting => sighting.datetime === valueDates);
    //make function
    console.log(filteredDates);


    filteredDates.forEach((filteredDates) => {
    var row = tbody.append("tr");
    Object.entries(filteredDates).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value)}
    )});

});




