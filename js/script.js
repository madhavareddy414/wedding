// const seconds = document.querySelector(".seconds .number"),
//   minutes = document.querySelector(".minutes .number"),
//   hours = document.querySelector(".hours .number"),
//   days = document.querySelector(".days .number");

// let secValue = 2,
//   minValue = 46,
//   hourValue = 7,
//   dayValue = 10;

// const timeFunction = setInterval(() => {
//   secValue--;

//   if (secValue === 0) {
//     minValue--;
//     secValue = 60;
//   }
//   if (minValue === 0) {
//     hourValue--;
//     minValue = 60;
//   }
//   if (hourValue === 0) {
//     dayValue--;
//     hourValue = 24;
//   }

//   if (dayValue === 0) {
//     clearInterval(timeFunction);
//   }
//   seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
//   minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
//   hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
//   days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
// }, 1000); //1000ms = 1s

var countDownDate = new Date("Sep 06, 2023 19:30:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days + " days "
document.getElementById("hours").innerHTML = hours + " hours " 
document.getElementById("mins").innerHTML = minutes + " minutes " 
document.getElementById("secs").innerHTML = seconds + " seconds"
// document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

if (timeleft < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML = "Time Up!";
  document.getElementById("days").innerHTML = ""
document.getElementById("hours").innerHTML =""
document.getElementById("mins").innerHTML = ""
document.getElementById("secs").innerHTML = ""
document.getElementById("live").innerHTML = ""
}
  // code goes here
  }, 1000);


    

