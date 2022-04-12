
const cartContainerElement = document.getElementById("cart-container")
const totalAmountElement = document.getElementById("total-cart-amount")


const cartStr = localStorage.getItem("cart")

let cartElements = JSON.parse(cartStr)

//display cart items from storage
const cartElementList = cartElements.map(function(cartItem, index){
   let liElement = document.createElement("li")
   liElement.id = index
   liElement.innerText = cartItem.name
   return liElement
})

cartContainerElement.append(...cartElementList)

// Get total amount in cart

totalAmount = 0

cartElements.forEach(product => {
   let price = product.price
   price = price.replaceAll(',', '')
   price = price.replaceAll(' ', '')
   price = price.replace('UGX', '')
   
   price = parseFloat(price)

   totalAmount += price
});

// totalAmountElement.innerText = "UGX " + totalAmount
totalAmountElement.innerText = `UGX ${totalAmount}`


