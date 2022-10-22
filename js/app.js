function refreshTime() {
    var datetime = new Date().toLocaleTimeString('en-GB')
    document.getElementById('time').innerHTML=datetime;
}
  setInterval(refreshTime, 1000);


function Quote() {
  var fs = require("fs");
  var text = fs.readFileSync("./quotes.txt", 'utf8');
  var quotes = text.split("\n")

  var random_quote = quotes[Math.floor(Math.random() * quotes.length)]
  console.log(random_quote)

  document.getElementById('quote').innerHTML=random_quote;
 
}  
  Quote();
  setInterval(Quote,  1000*60*60*4);


  var day = new Date();
  var hr = day.getHours();
  if (hr == 1) {
    document.getElementById("greet").innerHTML=("Good morning! 1AM and you're still going! ");
  }
  if (hr == 2) {
    document.getElementById("greet").innerHTML=("Hey, it's past 2AM! Go get some rest.");
  }
  if (hr == 3) {
    document.getElementById("greet").innerHTML=("Hey, it's after 3AM! Are you a vampire or what?");
  }
  if (hr == 4) {
    document.getElementById("greet").innerHTML=("4AM? You must roam all night huh!");
  }
  if (hr == 5) {
    document.getElementById("greet").innerHTML=("Whoa! It's almost daylight and you're still going!");
  }
  if (hr == 6) {
    document.getElementById("greet").innerHTML=("Hey, isn't it too early to be using your computer?");
  }
  if ((hr == 6) || (hr == 7) || (hr == 8) || (hr == 9) || (hr == 10)) {
    document.getElementById("greet").innerHTML=("Good Morning");
  }
  if (hr == 11) {
    document.getElementById("greet").innerHTML=("11AM... Is it time for lunch yet?");
  }
  if (hr == 12) {
    document.getElementById("greet").innerHTML=("NOON! Great, it must be time for lunch!");
  }
  if (hr == 14) {
    document.getElementById("greet").innerHTML=("It's 2PM. Have you eaten lunch yet?");
  }
  if ((hr == 15) || (hr == 16) || (hr == 13)) {
    document.getElementById("greet").innerHTML=("Good Afternoon");
  }
  if ((hr == 17) || (hr == 18) || (hr == 19) || (hr == 20) || (hr == 21) || (hr == 22)) {
    document.getElementById("greet").innerHTML=("Good Evening");
  }
  if (hr == 23) {
    document.getElementById("greet").innerHTML=("It's almost midnight...Aren't you sleepy yet?");
  }
  if (hr==0) {
    document.getElementById("greet").innerHTML=("It's midnight... do you ever sleep?");
  }
  