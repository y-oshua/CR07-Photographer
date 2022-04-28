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