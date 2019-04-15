const greet = (name, time) => {
    this.name = name || 'Duc'
    this.time = time || 'Day'
    console.log(`Good ${this.time}, ${this.name}!`);
}

greet()