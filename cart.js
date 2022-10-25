const shopCart = ['apple','banana', 'orange'];
const newCart = shopCart;
var action = "Get item";

function getItems(action, item)
    switch(action) {
    case "add item to shopping cart":
        newCart.push(item);
        break;
    case "remove item from shopping cart":
        let selected = newCart.indexOf(item);
        if (selected >= 0) {
            newCart.splice(selected, 1);
        }
        break;
    case "Remove all items":
        let selectAll = newCart.length;
        if (newCart.length >= 0) {
            newCart.splice(selectAll, 1);
        break;
        }
    case "empty cart":
        cart = [];
        break;
}



getItems();