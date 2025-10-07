import { Drink } from '../Drink';
import { CoffeeMachine } from '../CoffeeMachine';

// AAA Kompozicia


describe("CoffeeMachine", () => {
  
  it("should serve product if exact money inserted", () => {
    
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    
    expect(serving).toBe("Serving Coffee (small)");
  });

  it("should serve product and change in N.NN format if more money inserted", () => {
    
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2.5;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    
    expect(serving).toBe("Serving Coffee (small) with change 0.50");
  });

  it("shouldn't serve product if less money inserted", () => {
    
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 1;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    
    expect(serving).toBe("Not enough money");
  });

  it("shouldn't allow the price of product to be 0 or less", () => {
    
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = -1;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    
    expect(serving).toBe("Error: invalid price");
  });

  it("should add 50 cents to price if a medium product is chosen", () => {
    
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "medium";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2.5;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    
    expect(serving).toBe("Serving Coffee (medium)");
  });

  it("should add 1€ to price if a large product is chosen", () => {
    
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "large";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 3;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    
    expect(serving).toBe("Serving Coffee (large)");
  });

  it("should add 20 cents to price if milk is added", () => {
    
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = true;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2.2;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    
    expect(serving).toBe("Serving Coffee (small)");
  });

  it("shouldn't add to price if up to 2 cubes of sugar are chosen", () => {
    
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 2;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    
    expect(serving).toBe("Serving Coffee (small)");
  });

  it("should add 10 cents to price for every cube of sugar above 2 cubes if chosen", () => {
    
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 3;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2.1;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    
    expect(serving).toBe("Serving Coffee (small)");
  });

  it("shouldn't allow to choose more than 5 cubes", () => {
    
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 6;
    const DrinkSize = "Small"

  });

});