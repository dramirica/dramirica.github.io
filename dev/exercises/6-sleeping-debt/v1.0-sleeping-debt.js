/* 
CALCULATE SLEEP DEBT
by MDN Data Software - Mirica Dragos-Neculai
v 1.0/11.12.2020.00.14
*/

//Days sleep Hours In A Week
const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "lunedi":
      return 7;
      break;
    case "martedi":
      return 7;
      break;
    case "mercoledi":
      return 7;
      break;
    case "giovedi":
      return 8;
      break;
    case "venerdi":
      return 6;
      break;
    case "sabato":
      return 7;
      break;
    case "domenica":
      return 9;
      break;
    default:
      return 8;
      break;
  }
};

//Sum of the sleep hours of the week
const getActualSleepHours = () =>
  getSleepHours("lunedi") +
  getSleepHours("martedi") +
  getSleepHours("mercoledi") +
  getSleepHours("giovedi") +
  getSleepHours("venerdi") +
  getSleepHours("sabato") +
  getSleepHours("domenica");

//Ideal hours of sleep per week
const getIdealSleepHours = (hours) => hours * 7;

//Calculate the sleep debt
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(5);
  if (actualSleepHours === idealSleepHours) {
    console.log("You are sleeping perfectly. " + idealSleepHours + " hours.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You are sleeping too much. " +
        "Sleeped " +
        (actualSleepHours - idealSleepHours) +
        " hours more than needed."
    );
  } else {
    console.log(
      "You need to sleep more." +
        " Sleeped " +
        (idealSleepHours - actualSleepHours) +
        " hours more than needed."
    );
  }
};

//Start the program
console.log("Total hours sleeped this week: " + getActualSleepHours());

calculateSleepDebt();
