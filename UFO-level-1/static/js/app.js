// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

function createtable(UFOdata) {
    var tbody = d3.select("tbody");
    UFOdata.forEach((eachRecord) => {
        var eachRow = tbody.append("tr");
        Object.entries(eachRecord).forEach(([key, value]) => {
            var eachCell = eachRow.append("td");
            eachCell.html(value);
        });
    });
};
    
// clear the table for new data
function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  
  // initial display of all UFO sightings
  console.log(tableData);
  createtable(tableData);
  
  // 'Filter Table' button
  var button = d3.select("#filter-btn");
  
  // filter the database and display
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
    
    if (dateInput.trim() === "" ) {
      // display the whole database if the date field has no date
      var filteredData = tableData;
    } else {
      // otherwise, display the filtered dataset  
      var filteredData = tableData.filter(ufoSighting => 
        ufoSighting.datetime === dateInput.trim());
    };
  
    // display message if no records found
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
  
    console.log(filteredData);
    createtable(filteredData);
  });