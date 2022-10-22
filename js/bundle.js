(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function refreshTime() {
    var datetime = new Date().toLocaleTimeString('en-GB')
    document.getElementById('time').innerHTML=datetime;
}
  setInterval(refreshTime, 1000);


function Quote() {
  
  var text = "\"If you get to feeling you are snarled up and are making no progress, you toss your mood away and think in your heart that you are starting everything anew.\" - Miyamoto Musashi.\r\n\"Understand the harm and benefit of everything.\" - Miyamoto Musashi.\r\n\"Think lightly of yourself and deeply of the world.\" - Miyamoto Musashi.\r\n\"It is difficult to understand the universe if you only study one planet.\" - Miyamoto Musashi.\r\n\"Strategy is the craft of the warrior. Commanders must enact the craft, and troopers should know this Way. There is no warrior in the world today who really understands the Way of strategy.\" - Miyamoto Musashi.\r\n\"Everything can collapse. Houses, bodies, and enemies collapse when their rhythm becomes deranged.\" - Miyamoto Musashi.\r\n\"There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself.\" - Miyamoto Musashi.\r\n\"All man are the same except for their belief in their own selves, regardless of what others may think of them.\" - Miyamoto Musashi.\r\n\"Be neither insufficiently spirited nor over spirited. An elevated spirit is weak and a low spirit is weak. Do not let the enemy see your spirit.\" - Miyamoto Musashi.\r\n\"In large-scale strategy, when the enemy starts to collapse you must pursue him without letting the chance go. If you fail to take advantage of your enemies' collapse, they may recover.\" - Miyamoto Musashi.\r\n\"Many things can cause a loss of balance. One cause is danger, another is hardship, and another is surprise.\" - Miyamoto Musashi.\r\n\"These things cannot be explained in detail. From one thing, know ten thousand things. When you attain the Way of strategy there will not be one thing you cannot see. You must study hard.\" - Miyamoto Musashi.\r\n\"When your opponent is hurrying recklessly, you must act contrarily and keep calm. You must not be influenced by the opponent.\" - Miyamoto Musashi.\r\n\"Study strategy over the years and achieve the spirit of the warrior. Today is victory over yourself of yesterday; tomorrow is your victory over lesser men.\" - Miyamoto Musashi.\r\n\"Do not sleep under a roof. Carry no money or food. Go alone to places frightening to the common brand of men. Become a criminal of purpose. Be put in jail, and extricate yourself by your own wisdom.\" - Miyamoto Musashi.\r\n\"Nobody is strong and nobody is weak if he conceives of the body, from the head to the sole of the foot, as a unity in which a living mind circulates everywhere equally.\" - Miyamoto Musashi.\r\n\"What I call the void is where nothing exists. It is about things outside man's knowledge. Of course the void does not exist. By knowing what exist, you can know that which does not exist. That is the void.\" - Miyamoto Musashi.\r\n\"You win in battles with the timing in the Void born of the timing of cunning by knowing the enemies' timing, and this using a timing which the enemy does not expect.\" - Miyamoto Musashi.\r\n\"There is timing in everything. Timing in strategy cannot be mastered without a great deal of practice.\" - Miyamoto Musashi.\r\n\"A man cannot understand the art he is studying if he only looks for the end result without taking the time to delve deeply into the reasoning of the study.\" - Miyamoto Musashi.\r\n\"You should not have a favourite weapon. To become over-familiar with one weapon is as much a fault as not knowing it sufficiently well.\" - Miyamoto Musashi.\r\n\"If you once make an attack and fail, there is little chance of success if you use the same approach again.\" - Miyamoto Musashi.\r\n\"Whenever you cross swords with an enemy you must not think of cutting him either strongly or weakly; just think of cutting and killing him. Be intent solely on killing the enemy.\" - Miyamoto Musashi.\r\n\"Thus the science of martial arts involves the presence of mind to act as the sea when the enemy is like a mountain and act as a mountain when the enemy is like the sea.\" - Miyamoto Musashi.\r\n\"You have absolute resolve, wait for them to slacken, overcome immediately with force AND WIN.\" - Miyamoto Musashi.\r\n\"Be aware of opponents' sword, Yet not look at the opponents' swords at all. This takes work.\" - Miyamoto Musashi.\r\n\"It is essential to make your ordinary bearing the bearing you use in martial arts. And make the bearing you use in martial arts your ordinary bearing.\" - Miyamoto Musashi.\r\n\"Become your opponent... Consider a burglar in a house. You see him as powerful, he sees himself as trapped hopelessly.\" - Miyamoto Musashi.\r\n\"When an opponent attacks and you aggressively meet the attack, the moment you sense a chance in the rhythm of the opponent's attack you can gain victory right then and there.\" - Miyamoto Musashi.\r\n\"Think of your adversaries as your own soldiers, understanding that you should do with them as you wish, intending to manipulate them freely. You are the commander, the opponents are the troops. This takes work.\" - Miyamoto Musashi.\r\n\"[With] my life on the line...little sissy things never even occurred to me...When one is in full combat gear, one does not think of the small things.\" - Miyamoto Musashi.\r\n\"When you think you are going to get into a deadlock, you stop right away and seize victory by taking advantage of a different approach.\" - Miyamoto Musashi.\r\n\"Can hardly become a master at martial arts unless you can see the immediate in a broad context.\" - Miyamoto Musashi.\r\n\"If the enemy remains spirited it is difficult to crush him.\" - Miyamoto Musashi.\r\n\"You can abandon your own body, but never let go of your honor.\" - Miyamoto Musashi.\r\n\"It is said the warrior's is the twofold Way of pen and sword, and he should have a taste for both Ways. Even if a man has no natural ability he can be a warrior by sticking assiduously to both divisions of the Way. Generally speaking, the Way of the warrior is resolute acceptance of death.\" - Miyamoto Musashi.\r\n\"You must cultivate your wisdom and spirit. Polish your wisdom: learn public justice, distinguish between good and evil, study the Ways of different arts one by one. When you cannot be deceived by men you will have realized the wisdom of strategy.\" - Miyamoto Musashi.\r\n\"When you take up a sword, you must feel intent on cutting the enemy.\" - Miyamoto Musashi.\r\n\"If you wish to control others you must first control yourself.\" - Miyamoto Musashi.\r\n\"Get beyond love and grief: exist for the good of Man.\" - Miyamoto Musashi.\r\n";
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
  
},{}]},{},[1]);
