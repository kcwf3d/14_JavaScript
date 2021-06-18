var tableData = data;

//reference table
function dataLoad(ufoSightings) {
  var tbody = d3.select("tbody");
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};
function tbodyReset() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

console.log(tableData);
dataLoad(tableData);

var filterbtn = d3.select("#filter-btn");

filterbtn.on("click", function(event) {
  d3.event.preventDefault();
  tbodyReset();
  var inDate = d3.select("#datetime").property("value");
  
  if (inDate.trim() === "" ) {
    var flitData = tableData;
  } else {
    var flitData = tableData.filter(ufoSighting => 
      ufoSighting.datetime === inDate.trim());
  };

  console.log(flitData);
  dataLoad(flitData);
});
