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