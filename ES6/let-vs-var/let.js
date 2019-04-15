const prints = [];

for (let i = 0; i < 10; i++) {
    // blocked scope
    prints.push(() => console.log(i));
}

prints.forEach(print => print());