// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

tableData.forEach(function (sighting){
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]){
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    })
})

var button = d3.select("button");

var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter (){
    
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputdate = inputElement.property("value");

    console.log(inputdate);
    console.log(tableData);

    var filteredsightings = tableData.filter(tableData => tableData.datetime === inputdate);
    console.log(filteredsightings);
    tbody.html("");

    filteredsightings.forEach(function (sighting){
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]){
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        })
    })

}