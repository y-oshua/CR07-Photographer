// manually compiled from separate .js files


// BEGIN PEOPLE ---------------------------------------------------------------------------------
// convert json string into array of objects
var peopleParsed = JSON.parse(people);

var msnryPeople = new Masonry(".people", {
  columnWidth: 200,
  itemSelector: ".person",
  initLayout: false,
  percentPosition: true,
});

// create loop to return parsed json data
function displayPeople() {
  document.getElementsByClassName("people")[0].innerHTML = "";
  for (let person of peopleParsed) {
    document.getElementsByClassName("people")[0].innerHTML += `
        <div class="person col-sm-6 col-lg-4 mb-4">
        <div class="card">
            <img src="${person.img}" alt="${person.desc}">
        </div>
        `;
  }
}

// return function
// displayPeople();

msnryPeople.on("layoutComplete", function (items) {
  displayPeople();
  console.log(items.length);
});
setTimeout(() => {
  msnryPeople.reloadItems();
  msnryPeople.layout();
}, 100);

// BEGIN PLACES ---------------------------------------------------------------------------------

// convert json string into array of objects
var placesParsed = JSON.parse(places);

var msnryPlaces = new Masonry(".places", {
  columnWidth: 200,
  itemSelector: ".place",
  initLayout: false,
  percentPosition: true,
});

// create loop to return parsed json data
function displayPlaces() {
  document.getElementsByClassName("places")[0].innerHTML = "";
  for (let place of placesParsed) {
    document.getElementsByClassName("places")[0].innerHTML += `
        <div class="place col-sm-6 col-lg-4 mb-4">
        <div class="card">
            <img src="${place.img}" alt="${place.desc}">
        </div>
        `;
  }
}

// return function
// displayPlaces();

msnryPlaces.on("layoutComplete", function (items) {
  displayPlaces();
  console.log(items.length);
});
setTimeout(() => {
  msnryPlaces.reloadItems();
  msnryPlaces.layout();
}, 110);

// BEGIN CONCERTS ---------------------------------------------------------------------------------
// convert json string into array of objects
var concertsParsed = JSON.parse(concerts);

var msnryConcerts = new Masonry(".concerts", {
  columnWidth: 200,
  itemSelector: ".concert",
  initLayout: false,
  percentPosition: true,
});

// create loop to return parsed json data
function displayConcerts() {
  document.getElementsByClassName("concerts")[0].innerHTML = "";
  for (let concert of concertsParsed) {
    document.getElementsByClassName("concerts")[0].innerHTML += `
        <div class="concert col-sm-6 col-lg-4 mb-4">
        <div class="card">
            <img src="${concert.img}" alt="${concert.desc}">
        </div>
        `;
  }
}

// return function
// displayConcerts();

msnryConcerts.on("layoutComplete", function (items) {
  displayConcerts();
  console.log(items.length);
});
setTimeout(() => {
  msnryConcerts.reloadItems();
  msnryConcerts.layout();
}, 120);
