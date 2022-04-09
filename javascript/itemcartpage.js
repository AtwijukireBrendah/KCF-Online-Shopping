// Get url as a string. This will help us get product id
const urlString = (window.location.href).toLowerCase()

// convert url_string to JS understanble object
const url = new URL(urlString)
let productId = url.searchParams.get("product")

const productFromStorage = JSON.parse(localStorage.getItem("products"))

// Find our product from products in storage by ID
let result = productFromStorage.filter(function(product){
    return product.id.toLowerCase() === productId
})

// Get single product from result
let product = result[0]

// Set product image by changing the src attribute
let imageElement = document.getElementById("product-img")
imageElement.src = product.image

// Set product price by changing the value attribute
let priceElement = document.getElementById("product-price")
priceElement.innerText = 'UGX ' + product.price

let btnAddToCart = document.getElementById("btn-add-cart")

btnAddToCart.addEventListener("click", function(e){
    let cart = JSON.parse(localStorage.getItem("cart"))

    // Add prodcut to cart
    cart.unshift(product)
    // Save our cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart))
})