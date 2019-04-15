let toybox = {
    doll: 'Barbie',
    figure: 'Hulk',
    sport: 'ball'
}

const { doll, figure, sport } = toybox;
console.log(doll, figure, sport)

const { figure: actionFigure } = toybox;
console.log(actionFigure)

let appleProducts = ['MacBook', 'iPad', 'iPhone', 'iMac']
const [ product1, product2, ...restProducts ] = appleProducts
console.log(
    product1,
    product2,
    restProducts
)

// combined with default params
const getData = ({ url, method='post' } = {}, callback) => {
    callback(url, method);
}

getData({ url:'myserver.com/api' }, (url, method) => console.log(url, method))
getData(undefined, (url, method) => console.log(url, method))
getData({ url: undefined }, (url, method) => console.log(url, method))
getData({ url: 'www.hello.com/api', method:'get' }, (url, method) => console.log(url, method))

// nested object

const parentObject = {
    title: 'Parent',
    child: {
        title: 'Child'
    }
}

const { title: parentTitle, child: { title: childTitle} } = parentObject

console.log(parentTitle, childTitle);