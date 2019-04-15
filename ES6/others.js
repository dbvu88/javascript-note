// template literal

// rest paramters
const myFuction = (mainParam, ...rest) => {
    console.log(
        'mainParam: ', mainParam,
        '\nrest: ', rest
    )
}

myFuction("primary", 1, 2, 3, 4, 5, 'secondary', 'addition', 'blah blah blah');

// spread paramters

const candies = ["chocolate", "lolipop", "gummy bear"]
const meals = ["steamed rice", "steak", "brocoli beef", "fried chicken"]
const fruits = ["bananna", "strawberry", "kiwi", "apple", "orange"]

const food = [...candies, ...meals, ...fruits]

console.log(food)