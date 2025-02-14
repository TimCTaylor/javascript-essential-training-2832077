/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Meal {
    constructor(
      // Defines parameters:
      name,
      calories,
      cost
    ) {
      // Define properties:
      this.name = name;
      this.calories = calories;
      this.cost  = cost;
    }
    // Add methods like normal functions:
    setName(newName) {
      this.name = newName;
    }
  };
  

class Dinner extends Meal {
    constructor(
        name,
        calories,
        cost,
        pint
    ) {
        super( name, calories, cost);
        this.pint = pint;
    }
    setPint(newPint) {
        this.pint = newPint;
      }
  
}

  export default Meal;
  