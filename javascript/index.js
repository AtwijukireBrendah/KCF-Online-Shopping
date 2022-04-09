const products = [
   {
      id: "P001",
      name: "iPhone 13",
      price: "5,000,000",
      image: "assets/Images/iphone.jpg"
   },
   {
      id: "P002",
      name: "iPhone 12",
      price: "450,000",
      image: "assets/Images/tecno-spark-go-2021.jpg"
   },
   {
      id: "P003",
      name: "iPhone 57 pro max",
      price: "134,000,000",
      image: "assets/Images/tecno-pop5.jpg"
   },
   {
      id: "P004",
      name: "iPhone 5",
      price: "350,000",
      image: "assets/Images/tecno-pop5.jpg"
   }
]

const cart = []

// Add products to product list
localStorage.setItem("products", JSON.stringify(products))

// Initialise empty cart
localStorage.setItem("cart", JSON.stringify(cart))

const iPhoneModelsElement = document.getElementById("iphone-models")

const productElementList = products.map(function(product, index){
   let liElement = document.createElement("li")
   liElement.classList.add("model-tile")
   liElement.id = index

   let aElement = document.createElement("a")
   aElement.id = "itemcartpage-link"
   aElement.href = `./itemcartpage.html?product=${product.id}`
   liElement.appendChild(aElement)

   let divElement = document.createElement("div")
   aElement.appendChild(divElement)

   let productimageElement = document.createElement("img")
   productimageElement.src = product.image

   let productnameElement = document.createElement("p")
   productnameElement.innerText = product.name

   let productPriceElement = document.createElement("p")
   productPriceElement.innerText = product.price

   divElement.appendChild(productimageElement)
   divElement.appendChild(productnameElement)
   divElement.appendChild(productPriceElement)

   return liElement
})

// console.log(productElementList)

iPhoneModelsElement.append(...productElementList)

// productElementList.forEach(element => {
//    iPhoneModelsElement.appendChild(element)
// })

// console.log(iPhoneModelsElement)

// function searchProduct(name){
//    return products.filter(function(product) {
//       return product.name.toLowerCase() == name.toLowerCase()
//    })
// }
// function registerEvents(){
//    O("btnSearch").addEventListener("click", function(e) {
//       let searchInput = O("searchbar").value
//       let searchResults = searchProduct(searchInput)
//       console.log(searchResults)
//    })
// }

// registerEvents()