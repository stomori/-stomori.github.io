let data;
let privateDate;

function preload() {
  data = loadTable("NYC_Green.csv", "csv", "header");
  privateData = loadTable("NYC_Private.csv", "csv", "header");
}


function setup() {
  createCanvas(400, 400);
  background(255);

  let numRows = data.getRowCount();
  let privateNumRows = privateData.getRowCount();
  
  print(numRows);
  print(privateNumRows);
  
  let lngP = privateData.getColumn("Longitude");
  let latP = privateData.getColumn("Latitude");
  
  let lng = data.getColumn("Longitude");
  let lat = data.getColumn("Latitude");
  let size = data.getColumn("Size");
  
  let minLatP = min(lat)
  let maxLatP = max(lat);

  let minLngP = min(lng);
  let maxLngP = max(lng);

  let minLat = min(lat)
  let maxLat = max(lat);

  let minLng = min(lng);
  let maxLng = max(lng);

  let sizeMin = min(size);
  let sizeMax = max(size);

  print(sizeMin, sizeMax);

  for (let i = 0; i < numRows; i++) {
    let mapLng = map(lng[i], minLng, maxLng, 0, width);
    let mapLat = map(lat[i], minLat, maxLat, height, 0);

    let mapSize = 0;
    if (size[i] != isNaN) {
      mapSize = map(size[i], 0.01, 1, 2, 10);

    } else {
      mapSize = 2;
      print(size[i]);

    }
    fill("green");
    ellipse(mapLng, mapLat, mapSize);
  }
  
   for (let i = 0; i < privateNumRows; i++) {
    let mapLngP = map(lngP[i], minLng, maxLng, 0, width);
    let mapLatP = map(latP[i], minLat, maxLat, height, 0);
     
    fill("blue"); 
    ellipse(mapLngP, mapLatP, 5);
  } 
  
  
}