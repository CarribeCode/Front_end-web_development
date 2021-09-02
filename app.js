// jshint esversion: 6


var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}
setInterval(() => {
  const d = new Date();

  let date = d.toLocaleDateString('en-US', options);
  let time = d.toLocaleTimeString();

  document.getElementById('timer').innerHTML = date + " - " + time;
}, 1000);


//To spice the background with some random color: line x to y

let red, green, blue;
let c1 = 0, d1 = 50;
let c2 = 0, d2 = 50;
let c3 = 0, d3 = 50;

setInterval(() => {

  // The outcome colors
  red = 75 + Math.abs(c1 - d1);
  green = 75 + Math.abs(c2 - d2);
  blue = 75 + Math.abs(c3 - d3);
  //I need to select all of them.
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    c3++;
    d3--;
    if(c3 === 51) c3 = 0;
    if(d3 < 0) d3 = 50;

  setTimeout(() => {
    c2++;
    d2--;
    if(c2 === 51) c2 = 0;
    if(d2 < 0) d2 = 50;
  }, 1600);

  setTimeout(() => {
    c1++;
    d1--;
    if(c1 === 51) c1 = 0;
    if(d1 < 0) d1 = 50;
  }, 800);

},100);
