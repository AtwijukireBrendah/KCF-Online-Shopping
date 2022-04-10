const products = [
   {
      id: "P001",
      name: "iPhone X",
      price: "2,000,000",
      image: "assets/Images/iphones/iphonex.png",
      brand: "Apple",
   },
   {
      id: "P002",
      name: "iPhone-11",
      price: "3,000,000",
      image: "assets/Images/iphones/apple-iphone-11.jpg",
      brand: "Apple",

   },
   {
      id: "P003",
      name: "iPhone-12",
      price: "4,000,000",
      image: "assets/Images/iphones/apple-iphone-12-pro--.jpg",
      brand: "Apple",
   },
   {
      id: "P004",
      name: "iPhone-13",
      price: "5,000,000",
      image: "assets/Images/iphones/apple-iphone-13-pro-max.jpg",
      brand: "Apple",
   },
   // {
   //    id: "S001",
   //    name: "samsung galaxy s22",
   //    price: "350,000",
   //    image: "assets/Images/samsung galaxy s22.webp"
   // },
   // {
   //    id: "S002",
   //    name: "samsung-galaxy-s21-ultra-5g",
   //    price: "350,000",
   //    image: "assets/Images/samsung-galaxy-s21-ultra-5g-.jpg"
   // },{
   //    id: "S003",
   //    name: "iPhone 5",
   //    price: "350,000",
   //    image: "assets/Images/tecno-pop5.jpg"
   // },{
   //    id: "S004",
   //    name: "iPhone 5",
   //    price: "350,000",
   //    image: "assets/Images/tecno-pop5.jpg"
   // }
]





// const cart = []

// // Add products to product list
// localStorage.setItem("products", JSON.stringify(products))

// // Initialise empty cart
// localStorage.setItem("cart", JSON.stringify(cart))

const iPhoneModelsElement = document.getElementById("iphone-models")
// display iphone models from storage
const iphoneElementList = products.map(function(product, index){
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

iPhoneModelsElement.append(...iphoneElementList)

// productElementList.forEach(element => {
//    iPhoneModelsElement.appendChild(element)
// })

// console.log(iPhoneModelsElement)




const samsungModelsElement = document.getElementById("samsung-models")

//display samsung models from storage
const samsungElementList = products.map(function(product, index){
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

// console.log(samsungElementList)

samsungModelsElement.append(...samsungElementList)

// samsungElementList.forEach(element => {
//    samsungModelsElement.appendChild(element)
// })

// console.log(samsungModelsElement)





const infinixModelsElement = document.getElementById("infinix-models")

//display infinix models from storage
const infinixElementList = products.map(function(product, index){
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

// console.log(infinixElementList)

infinixModelsElement.append(...infinixElementList)

// infinixElementList.forEach(element => {
//    infinixModelsElement.appendChild(element)
// })

// console.log(infinixModelsElement)





const tecnoModelsElement = document.getElementById("tecno-models")
// display tecno models from storage
const tecnoElementList = products.map(function(product, index){
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

tecnoModelsElement.append(...tecnoElementList)

// productElementList.forEach(element => {
//    iPhoneModelsElement.appendChild(element)
// })

// console.log(iPhoneModelsElement)








function searchProduct(name){
   return products.filter(function(product) {
      return product.name.toLowerCase() == name.toLowerCase()
   })
}
function registerEvents(){
   O("btnSearch").addEventListener("click", function(e) {
      let searchInput = O("searchbar").value
      let searchResults = searchProduct(searchInput)
      console.log(searchResults)
   })
}

registerEvents()