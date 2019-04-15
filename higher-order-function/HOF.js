const holderA = arg => {
    const parentProp = arg;
    console.log("1st order", parentProp);
    return arg => {
        const childProp = arg;
        console.log("2nd order", childProp, parentProp);
        return arg => {
            console.log("3rd order", arg, childProp, parentProp);
        }
    }
}

holderA("1")("2")("3");