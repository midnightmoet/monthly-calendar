const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();


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

monthEl.innerText = months[monthIndex];
fullDateEl.innerText = new Date().toDateString();

let days = "";

for (let i = 1; i <= lastDay; i++) {
    days += `<div>${i}</div>`;
}


// ----------------------------------------------
// CONSOLE LOG TO TEST EVERYTHING IS WORKING
// console.log(monthEl);
// console.log(fullDateEl);
// console.log(monthIndex);
// console.log(months);
// console.log(months[monthIndex]);
// console.log(new Date().toDateString());
// console.log(lastDay);
