// can't reassign/overwrite

const name = "Ben"

function namer() {
    name = "Cole"
}


console.error(namer());

// you can modify a const object or array, but you can't overwrite/reassign a const object or array