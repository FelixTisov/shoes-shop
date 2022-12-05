const itemsArray = [
    {
        title: 'Nike Air I',
        image: require('../images/shoes/nike1.png'),
        price: '300',
        id: '2473'
    },
    {
        title: 'Nike Air Max',
        image: require('../images/shoes/nike2.png'),
        price: '420',
        id: '5683'
    },
    {
        title: 'Nike Air II',
        image: require('../images/shoes/nike3.png'),
        price: '385',
        id: '9275'
    },
    {
        title: 'Nike Air Force',
        image: require('../images/shoes/nike4.png'),
        price: '440',
        id: '4812'
    },

    {
        title: 'Nike Jordan',
        image: require('../images/shoes/nike5.png'),
        price: '360',
        id: '0985'
    },
    {
        title: 'Nike Air Zoom',
        image: require('../images/shoes/nike11.png'),
        price: '390', 
        id: '3728'
    },
    {
        title: 'Nike Air Force II',
        image: require('../images/shoes/nike12.png'),
        price: '475',
        id: '1270'
    },

]

function generateRows (itemsArray) {

    let columns = []
    let tempArray = []
    let indexInRow = 0


    itemsArray.forEach((item, index) => {

        tempArray.push({ title: item.title, image: item.image, price: item.price, id: item.id })
        indexInRow++

        if (indexInRow === 4 || index === (itemsArray.length - 1)) {
            columns.push(tempArray)
            indexInRow = 0
            tempArray = []
        }
    })

    console.log(columns)

    return columns
}

const catalogGoods = generateRows(itemsArray)

module.exports = catalogGoods