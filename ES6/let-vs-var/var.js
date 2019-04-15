const prints = [];

for (var i = 0; i < 10; i++) {
    // var -> functioned scope
    prints.push(() => console.log(i));
}

prints.forEach(print => print());