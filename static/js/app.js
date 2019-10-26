// from data.js, console.log the sightings data from data.js
var tableData = data;
var tbody = d3.select("tbody");
// console.log(tableData)


// data.forEach(function(Fsightings) {
// // console.log(Fsightings);
// var row = tbody.append("tr");
// Object.entries(Fsightings).forEach(function([key, value]) {
//     // console.log(key, value);
//     var cell = row.append("td");
//     cell.text(value);
// });
// });


var button = d3.select("button");
button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
   
  
    function slice(sighting) {
        // return sighting.datetime == "1/3/2010";
        return sighting.datetime == inputValue;
        }
      d3.select("h1>span").text(inputValue);
      var sightingRow = data.filter(slice);
      console.log(sightingRow);

      sightingRow.forEach((sightingsFunc) => {
        var row = tbody.append("tr");
        Object.entries(sightingsFunc).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
     });

});


