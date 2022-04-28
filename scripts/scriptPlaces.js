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