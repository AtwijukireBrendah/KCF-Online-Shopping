// Get url as a string. This will help us get product id
const urlString = (window.location.href).toLowerCase()

// convert url_string to JS understanble object
const url = new URL(urlString)
let productId = url.searchParams.get("product")

const productFromStorage = JSON.parse(localStorage.getItem("products"))
const searchResults = JSON.parse(localStorage.getItem("results"))

// Find our product from products in storage by ID
let result = productFromStorage.filter(function(product){
    return product.id.toLowerCase() === productId
})

// Get single product from result
let product = result[0]

// Set product image by changing the src attribute
let imageElement = document.getElementById("product-img")
imageElement.src = product.image
imageElement.setAttribute('style','width:10%, height:10%; color:black; font-size:xx-large;')




// Set product description by changing the innerText attribute
let descriptionElement = document.getElementById("product-description")
descriptionElement.innerText = product.description
descriptionElement.setAttribute('style','color:black; font-size:xx-large; text-align:center; padding-top:5px;')


// // Set product description by changing the innerText attribute
// let nameElement = document.getElementById("product-name")
// nameElement.innerText = "Name: " + product.name
// nameElement.setAttribute('style','color:black; font-size:xx-large; align-text:left;')


// Set product description by changing the innerText attribute
let brandElement = document.getElementById("product-brand")
brandElement.innerText = "Brand: " + product.brand
brandElement.setAttribute('style','color:black; font-size:xx-large; align-text:left;')


// // Set product name by changing the innerText attribute
// let colorElement = document.getElementById("product-color")
// colorElement.innerText = "Color: " + product.color
// colorElement.setAttribute('style','color:black; font-size:xx-large;')


// Set product name by changing the innerText attribute
let stockElement = document.getElementById("product-stock")
stockElement.innerText = "In stock: " + product.stock
stockElement.setAttribute('style','color:black; font-size:xx-large;')


// Set product price by changing the innerText attribute
let priceElement = document.getElementById("product-price")
priceElement.innerText = product.price
priceElement.setAttribute('style','color:black; font-size:xx-large;color:orange;')


let btnAddToCart = document.getElementById("btn-add-cart")

btnAddToCart.addEventListener("click", function(e){
    let cart = JSON.parse(localStorage.getItem("cart"))


    // Add prodcut to cart
    cart.unshift(product)
    // Save our cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart))

    // console.log("Item has been saved successfully!");
    // document.write("Item saved");

    alert("Item has been added to cart successfully!!");
})


