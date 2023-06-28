const addToDb = (id) => {
    const orderCart = getOrder();
    const quantity = orderCart[id];
    if (!quantity) {
        orderCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        orderCart[id] = newQuantity;

    }
    localStorage.setItem('order', JSON.stringify(orderCart))
}

const getOrder = () => {
    const store = localStorage.getItem('order');
    let storeOrder = {};
    if (store) {
        storeOrder = JSON.parse(store)

    }

    return storeOrder;
}

export {
    addToDb, getOrder

}