// spread paramters

const candies = ["chocolate", "lolipop", "gummy bear"]
const meals = ["steamed rice", "steak", "brocoli beef", "fried chicken"]
const fruits = ["bananna", "strawberry", "kiwi", "apple", "orange"]

const food = [...candies, ...meals, ...fruits, 'cake']

console.log(food)

const infoLog = (name, job) => {
    console.log(`${name}'s occupation is ${job}`)
}

console.log(infoLog(...['Duc','Programmer']))