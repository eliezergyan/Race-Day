let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 25;

if(runnersAge > 18 && registeredEarly === true){
  raceNumber += 1000;
}else if(runnersAge > 18 && registeredEarly ===false){
  console.log(`Racer ${raceNumber}, you'll race at 11:0am`);
}else if(runnersAge < 18){
  console.log(`Racer ${raceNumber}, you'll race at 12:30pm`);
}else{
  console.log('See the registration desk.')
}

if(runnersAge > 18 && registeredEarly === true){
  console.log(`Racer ${raceNumber}, you'll race at 9:30am`);
}