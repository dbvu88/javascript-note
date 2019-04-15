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