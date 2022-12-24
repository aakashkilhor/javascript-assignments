// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift("Meat")

shoppingCart.push("Sugar");

// Removing Honey
let index = shoppingCart.indexOf("Honey");
if (index !== -1) {
  shoppingCart.splice(index, 1);
}

// Replacing tea with green tea
let indextea = shoppingCart.indexOf("Tea");
console.log(indextea)
if (indextea !== -1) {
    shoppingCart[indextea]= "Green Tea";
  }

console.log(shoppingCart);