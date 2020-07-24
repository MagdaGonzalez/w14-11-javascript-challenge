var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
   
    var row = tbody.append("tr");

    
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);

      var cell = row.append("td");
      cell.text(value);
    });
  });



var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");


    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);

    var row = tbody.append("tr");

    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});
});
