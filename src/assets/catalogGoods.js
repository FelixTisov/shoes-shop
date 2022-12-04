const itemsArray = [
    {
        title: 'Nike Air I',
        image: require('../images/shoes/nike1.png'),
        price: '300'
    },
    {
        title: 'Nike Air Max',
        image: require('../images/shoes/nike2.png'),
        price: '420'
    },
    {
        title: 'Nike Air II',
        image: require('../images/shoes/nike3.png'),
        price: '385'
    },
    {
        title: 'Nike Air Force',
        image: require('../images/shoes/nike4.png'),
        price: '440'
    },

    {
        title: 'Nike Jordan',
        image: require('../images/shoes/nike5.png'),
        price: '360'
    },
    {
        title: 'Nike Air Zoom',
        image: require('../images/shoes/nike11.png'),
        price: '390'
    },
    {
        title: 'Nike Air Force II',
        image: require('../images/shoes/nike12.png'),
        price: '475'
    },

]

function generateRows (itemsArray) {

    let columns = []
    let tempArray = []
    let indexInRow = 0


    itemsArray.forEach((item, index) => {

        tempArray.push({ title: item.title, image: item.image, price: item.price })
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