const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];

// store list items
const listItems = [];

let dragStartIndex;

createList();

// insert list Items into dom
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() })) // create object with person and random sort value
    .sort((a, b) => a.sort - b.sort) // now sort new array of objects based on sort value
    .map((a) => a.value) // then return just the values without the sort value
    .forEach((person, index) => {
      // finally add to dom
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div>`;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
}
