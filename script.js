"use strict";

const name = "Nick Wagner";
let age = 27;
const birthday = "May 6";
let pineapplePizza = false;
const lifeEvents = [
  "I was born in Michigan",
  "I am a father",
  "I lived in Las Vegas for a year",
  "I hope to be a graduate of a Grand Circus bootcamp",
];

if (pineapplePizza) {
  console.log(
    `My name is ${name} and i like pineapple on pizza. I am curently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and i am not into pineapple on my pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

for (let event of lifeEvents) {
  console.log(event);
}

//for(let event of lifeEvents) {
//event = `${event}!`;
//console.log(event);

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5 === 5. it took ${counter} iterations to randomly generate the numnber to 5.`
    );
    break;
  }
}
