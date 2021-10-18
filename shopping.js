const shoppingList = [
    {
        id: 1,
        name: "Milk",
        price: 3.99  
    },
    {
        id: 2,
        name: "eggs",
        price: 2.99
    },
    {
        id: 3,
        name: "Pizza rolls",
        price: 6.99
    },
    {
        id: 4,
        name: "Chicken",
        price: 5.99
    },
    {
        id: 5,
        name: "Oranges",
        price: 2.49
    },             
    {
        id: 6,
        name: "Bread",
        price: 3.49
    },
    {
        id: 7,
        name: "Mustard",
        price: 1.99
    },                 
]

//console.log(shoppingList)

const addItem = (itemObject) => {
    const lastIndex = shoppingList.length - 1
    const currentLastItem = shoppingList[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem =maxId + 1
    

    itemObject.id = idForNewItem
    shoppingList.push(itemObject)
}

const yogurt = {
    name: "Yogurt",
    price: 4.99
}

const guac = {
    name: "Guac",
    price: 9.99
}

const chips = {
    name: "Chips",
    price: 15.00
}

const granola = {
    name: "Granola",
    price: 11.49
}

const peanutButter = {
    name: "Peanut Butter",
    price: 6.99
}

addItem(yogurt)
addItem(guac)
addItem(granola)

addItem(chips)
addItem(peanutButter)



for (const expensiveList of shoppingList) {
    if (expensiveList.price > 8) {
      console.log(`${expensiveList.name} is too expensive`)
}
}


