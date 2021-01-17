/* 
CREATE RANDOM MEAL
by MDN Data Software - Mirica Dragos-Neculai
v 1.0/10.01.2021.10.11
*/
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizersIn) {
    this._courses.appetizers = appetizersIn;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  get courses() {
    return {
      appetizers,
      mains,
      desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = menu._courses[courseName];
    const randomIndx = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndx];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    totalPrice = appetizer.price + main.price + dessert.price;
    return `The dinner is composed by ${appetizer.name}, ${main.name}, ${dessert.name} for a total of ${totalPrice}.`;
  },
};

//Adding dishes to menu
menu.addDishToCourse("appetizers", "Caffe Macchiato", 1.5);
menu.addDishToCourse("appetizers", "Cappuccino", 2.0);
menu.addDishToCourse("appetizers", "Ristretto", 1.0);
menu.addDishToCourse("mains", "Lasagna", 25);
menu.addDishToCourse("mains", "Pizza", 10);
menu.addDishToCourse("mains", "Pasta", 15.0);
menu.addDishToCourse("desserts", "Tiramisu", 4.3);
menu.addDishToCourse("desserts", "Torta", 5.6);
menu.addDishToCourse("desserts", "Frutta", 2.5);

const meal = menu.generateRandomMeal();

console.log(meal);
