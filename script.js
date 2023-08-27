const monthElement = document.querySelector(".date h1");
const fullDateElement = document.querySelector(".date p");
const daysElement = document.querySelector(".days");

const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthElement.innerText = months[monthIndex];
fullDateElement.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysElement.innerHTML = days;

// ----------------------------------------------
// CONSOLE LOG TO TEST EVERYTHING IS WORKING
// console.log(monthEl);
// console.log(fullDateEl);
// console.log(monthIndex);
// console.log(months);
// console.log(months[monthIndex]);
// console.log(new Date().toDateString());
// console.log(lastDay);
