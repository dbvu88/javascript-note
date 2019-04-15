
const makeCar = (model, make, year) => {

    //es6 shorthand object constructor
    const data = { model, make, year }
    
    return data;
}

const myCar = makeCar('Model X', 'Tesla', 2017);
console.log(myCar);

const name = "John";
console.log({name});