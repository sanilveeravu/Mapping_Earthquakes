// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);
//let map = L.map('mapid').setView([34.0522, -118.2437], 14);
//let map = L.map('mapid').setView([37.6213, -122.3790], 5);
//let map = L.map('mapid').setView([37.5, -122.5], 10);
// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);



let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Accessing the airport GeoJSON URL
let usgsdata = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup(`<h3>${feature.properties.name}</h3><hr><h4>${feature.properties.city},${feature.properties.country}</h4>`);
//   }
// }).addTo(map);

// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup(`<h3>Airport code: ${feature.properties.faa}</h3><hr><h3>Airport Name: ${feature.properties.name}</h3>`);
//     }
//   }).addTo(map);

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];

// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];  

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line,{
//     color: "blue",
//     weight: 4,
//     opacity: 0.5,
//     dashArray: '10, 10'
// }).addTo(map);  

// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// let marker = L.circle([34.0522, -118.2437],{
//     radius: 100
// }).addTo(map);

// let marker = L.circle([34.0522, -118.2437],{
//     radius: 300,
//     color: "black",
//     fillColor: "#ffffa1"
// }).addTo(map);

// Get data from cities.js
//let cityData = cities;

// let marker = L.circleMarker([34.0522, -118.2437],{
//     radius: 300,
//     color: "black",
//     fillColor: "#ffffa1"
// }).addTo(map);

// cityData.forEach(function(city){
//     console.log(city);
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map)
// });

// cityData.forEach(function(city){
//     console.log(city);
//     L.circleMarker(city.location,{
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map)
// });

// cityData.forEach(function(city){
//     console.log(city);
//     L.circleMarker(city.location,{
//         radius: city.population/100000,
//         color: "orange",
//         fillColor: "#ffffa1",
//         weight: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map)
// });

// We create the tile layer that will be the background of our map.

//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     //id: 'mapbox/streets-v11',
//     //tileSize: 512,
//     //zoomOffset: -1,
//     accessToken: API_KEY
// });



// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);     

L.control.layers(baseMaps).addTo(map);

// Create a style for the lines.
// let myStyle = {
//   color: "blue",
//   weight: 1,
//   fillColor: "yellow"
// }


// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
  return {
    opacity:1,
    fillOpacity: 1,
    fillColor: "#ffae42",
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}

// Grabbing our GeoJSON data.
d3.json(usgsdata).then(function(data){
  //console.log(data);
  console.log("here");
  console.log(styleInfo);
  console.log("end");
   // Creating a GeoJSON layer with the retrieved data.
   L.geoJSON(data ,  {
    pointToLayer: function(feature, latlng) {
      console.log(data);
      return L.circleMarker(latlng);
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo
   //{
        // color: '#ffffa1',
        // weight: 2,
        // style: myStyle,
        // //We turn each feature into a marker on the map.
        // onEachFeature: function(feature, layer) {
        //   console.log(layer);
        //   layer.bindPopup(`<h3>${feature.properties.AREA_NAME}</h3>`);
        // }
      // }
  }).addTo(map);
});


// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup(`<h3>Airport code: ${feature.properties.faa}</h3><hr><h3>Airport Name: ${feature.properties.name}</h3>`);
//     }
//   }).addTo(map);