let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const age = 19;

if(age > 18 && registeredEarly){
  raceNumber += 100;
}

if(age > 18 && registeredEarly){
  console.log(`${raceNumber} : Time of race is 9:30 am`);
}
else if(age > 18 && !registeredEarly){
  console.log(`${raceNumber} : Late adults run at 11:00 am`);
}
else if(age < 18){
  console.log(`${raceNumber} : Youth registrants run at 12:30 pm`);
  }
  else{
  console.log(`${raceNumber} : Go to registration Desk`);
  }



