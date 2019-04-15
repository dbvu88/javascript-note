function Person(data) {
    for (let key in data) {
        this[key] = data[key];
    }

    this.getKeys = () => {
        return Object.keys(this);
    }
}

const Duc = new Person({
    name: 'Duc',
    role: 'Programmer'
});

console.log(JSON.stringify(Duc.getKeys()));

const getKeys = Duc.getKeys;

console.log(getKeys());
