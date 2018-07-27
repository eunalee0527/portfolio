let today = new Date();

let populateCalendar= function() {
  let h1 = document.querySelector("h1");
  h1.innerText = today.getFullYear() + " - " + (today.getMonth() +1);
  
  let monthly = document.querySelector('.monthly');
  monthly.innerHTML = "";
  
  let todayClone = new Date(today);
  todayClone.setDate(1);
  todayClone.setMonth(todayClone.getMonth() +1);
  todayClone.setDate(0);
  
  let numdays = todayClone.getDate();
 
  todayClone.setDate(1);
  let firstDay = todayClone.getDay();
  
  for(let i = 0; i<firstDay; i++) {
    let day = document.createElement("div");
    day.innerText = "";
    day.style.background = "white";
    monthly.appendChild(day);
  }
  for(let i=0; i<numdays; i++) {
    let day = document.createElement("div");
    day.innerText = i + 1;
    monthly.appendChild(day);
  }
}

populateCalendar();

let prevBtn = document.querySelector("button");
let nextBtn = document.querySelectorAll("button")[1];
let prevYear = document.querySelectorAll("button")[2];
let nextYear = document.querySelectorAll("button")[3];

nextBtn.addEventListener('click', function() {
  today.setMonth(today.getMonth() +1);
  populateCalendar();
})

prevBtn.addEventListener('click', function() {
  today.setMonth(today.getMonth() -1);
  populateCalendar();
})

prevYear.addEventListener('click', function() {
  today.setFullYear(today.getFullYear() -1);
  populateCalendar();
})

nextYear.addEventListener('click', function() {
  today.setFullYear(today.getFullYear() +1);
  populateCalendar();
})