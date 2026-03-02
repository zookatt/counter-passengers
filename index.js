let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");
let savedEntries = [];

function increment() {
  if (count < 0) {
    alert("Count can't be less than 0");
  } else {
    count += 1;
    countEl.textContent = count;
  }

  console.log(count);
}
function save() {
  const entryDate = new Date().toLocaleTimeString();
  savedEntries.push(count);
  saveEl.textContent = count + " - " + entryDate;
  updateTotalEntries();
  countEl.textContent = 0;
  count = 0;
}
function decrement() {
  if (count <= 0) {
    alert("Count can't be less than 0");
  } else {
    count -= 1;
    countEl.textContent = count;
  }
  console.log(count);
}

function updateTotalEntries() {
  let sum = savedEntries.reduce((sum, el) => sum + el, 0);
  totalEl.textContent = "Total entries: " + sum;
}

function reset() {
  count = "";
  savedEntries = [];
  count.textContent = 0;
  saveEl.textContent = "Previous entries: " + 0;
  totalEl.textContent = "Total entries: " + 0;
}
