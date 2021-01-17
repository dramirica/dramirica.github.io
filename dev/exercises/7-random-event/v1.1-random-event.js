/* 
ASSIGN A RANDOM EVENT
by MDN Data Software - Mirica Dragos-Neculai
v 1.0/17.12.2020.08.59
*/

//Select an event randomly
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

//For every event there is a total of days
const getTrainingDays = (event) => {
  let days;
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};

//Display event and days
const logEvent = (event, name) => {
  console.log(`${name}'s event is: ${event}`);
};
const logTime = (days, name) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

//generate the event 
const generate = (name) => {
  let event = getRandEvent();
  let days = getTrainingDays(event);
  logEvent(event, name);
  logTime(days, name);
}

//run
generate('Dra');
generate('Anna');
generate('Valerian');