
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


window.onload = function() {
  //write your code here
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = "<p>" + getExcuse(who) + " " + getExcuse(action) + " " + getExcuse(what) + " " + getExcuse(when) + "</p>";
}

function getExcuse(array){
  return array[Math.floor(Math.random()*(array.length))];
}
