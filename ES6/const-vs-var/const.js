// can't reassign/overwrite

const name = "Ben"

function namer() {
    name = "Cole"
}
try {
    namer()
}
catch {
    console.log("can't mutate a constant")
}

console.log(name);

// you can modify a const object or array, but you can't overwrite/reassign a const object or array