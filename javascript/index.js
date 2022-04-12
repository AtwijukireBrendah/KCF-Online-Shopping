const products = [
   {
      id: "P001",
      name: "iPhone X",
      price: " UGX 2,000,000",
      image: "assets/Images/iphones/iphonex.png",
      brand: "Apple",
   },
   {
      id: "P002",
      name: "iPhone-11",
      price: "UGX 3,000,000",
      image: "assets/Images/iphones/apple-iphone-11.jpg",
      brand: "Apple",
   },
   {
      id: "P003",
      name: "iPhone-12",
      price: "UGX 4,000,000",
      image: "assets/Images/iphones/apple-iphone-12-pro--.jpg",
      brand: "Apple",
   },
   {
      id: "P004",
      name: "iPhone-13",
      price: "UGX 5,000,000",
      image: "assets/Images/iphones/apple-iphone-13-pro-max.jpg",
      brand: "Apple",
   },

   {
      id: "S001",
      name: "samsung galaxy s22",
      price: "UGX 350,000",
      image: "assets/Images/samsung/samsung galaxy s22.webp",
      brand: "Samsung",

   },
   {
      id: "S002",
      name: "samsung-galaxy-s21-ultra-5g",
      price: "UGX 350,000",
      image: "assets/Images/samsung/samsung-galaxy-s21-ultra-5g-.jpg",
       brand: "Samsung",

   },
   {
      id: "S003",
      name: "samsung-galaxy-m32-5g",
      price: "UGX 350,000",
      image: "assets/Images/samsung/samsung-galaxy-m32-5g-.jpg",
      brand: "Samsung",

   },
   {
      id: "S004",
      name: "samsung-galaxy-z-fold3-5g",
      price: "UGX 350,000",
      image: "assets/Images/samsung/samsung-galaxy-z-fold3-5g.jpg",
       brand: "Samsung",
   },

   {
      id: "T001",
      name: "tecno-spark-go",
      price: "UGX 350,000",
      image: "assets/Images/tecno/tecno-spark-go-2021.jpg",
      brand: "Tecno",
   },
   {
      id: "T002",
      name: "tecno-camon-18p",
      price: "UGX 350,000",
      image: "assets/Images/tecno/tecno-camon-18p.jpg",
      brand: "Tecno",
   },
   {
      id: "T003",
      name: "tecno-spark-8",
      price: "UGX 350,000",
      image: "assets/Images/tecno/tecno-spark-8.jpg",
      brand: "Tecno",
   },
   {
      id: "T004",
      name: "tecno-pop5",
      price: "UGX 350,000",
      image: "assets/Images/tecno/tecno-pop5.jpg",
      brand: "Tecno",
   },

   {
      id: "F001",
      name: "infinix-hot10s",
      price: "UGX 350,000",
      image: "assets/Images/infinix/hot10s.jpg",
      brand: "Infinix",
   },
   {
      id: "F003",
      name: "infinix-zero8",
      price: "UGX 350,000",
      image: "assets/Images/infinix/zero8.jpg",
       brand: "Infinix",
   },
   {
      id: "F003",
      name: "infinix-hot10lite",
      price: "UGX 350,000",
      image: "assets/Images/infinix/hot10lite.jpg",
       brand: "Infinix",
   },
   {
      id: "F004",
      name: "infinx-Note10",
      price: "UGX 350,000",
      image: "assets/Images/infinix/Note10.jpg",
      brand: "Infinix",
   },


]

// Add products to product list
localStorage.setItem("products", JSON.stringify(products))

// // const iPhoneModelsElement = document.getElementById("iphone-models")
// // const iPhoneModelsElement = document.getElementById("iphone-models")
//    const iPhoneModelsElement= document.querySelector('#iphone-models');


// const productElementList = products.map(function(product, index){
//    let liElement = document.createElement("li")
//    liElement.classList.add("model-tile")
//    liElement.id = index

//    let aElement = document.createElement("a")
//    // aElement.setAttribute('style','width:500px;background-color:aliceblue;list-style:none');
//    aElement.id = "itemcartpage-link"
//    aElement.href = `./itemcartpage.html?product=${product.id}`
//    liElement.appendChild(aElement)

//    let divElement = document.createElement("div")
//    aElement.appendChild(divElement)

//    let productimageElement = document.createElement("img")
//    productimageElement.src = product.image

//    let productnameElement = document.createElement("p")
//    productnameElement.innerText = product.name

//    let productPriceElement = document.createElement("p")
//    productPriceElement.innerText = product.price

//    divElement.appendChild(productimageElement)
//    divElement.appendChild(productnameElement)
//    divElement.appendChild(productPriceElement)

//    return liElement
// })

// // console.log(productElementList)

// iPhoneModelsElement.append(...productElementList)

// // productElementList.forEach(element => {
// //    iPhoneModelsElement.appendChild(element)
// // })

// // console.log(iPhoneModelsElement)


// const samsungModelsElement = document.getElementById("samsung-models")

// //display samsung models from storage
// const samsungElementList = products.map(function(product, index){
//    let liElement = document.createElement("li")
//    liElement.classList.add("model-tile")
//    liElement.id = index

//    let aElement = document.createElement("a")
//    aElement.id = "itemcartpage-link"
//    aElement.href = `./itemcartpage.html?product=${product.id}`
//    liElement.appendChild(aElement)

//    let divElement = document.createElement("div")
//    aElement.appendChild(divElement)

//    let productimageElement = document.createElement("img")
//    productimageElement.src = product.image

//    let productnameElement = document.createElement("p")
//    productnameElement.innerText = product.name

//    let productPriceElement = document.createElement("p")
//    productPriceElement.innerText = product.price

//    divElement.appendChild(productimageElement)
//    divElement.appendChild(productnameElement)
//    divElement.appendChild(productPriceElement)

//    return liElement
// })

// // console.log(samsungElementList)

// samsungModelsElement.append(...samsungElementList)

// // samsungElementList.forEach(element => {
// //    samsungModelsElement.appendChild(element)
// // })

// // console.log(samsungModelsElement)





// const infinixModelsElement = document.getElementById("infinix-models")

// //display infinix models from storage
// const infinixElementList = products.map(function(product, index){
//    let liElement = document.createElement("li")
//    liElement.classList.add("model-tile")
//    liElement.id = index

//    let aElement = document.createElement("a")
//    aElement.id = "itemcartpage-link"
//    aElement.href = `./itemcartpage.html?product=${product.id}`
//    liElement.appendChild(aElement)

//    let divElement = document.createElement("div")
//    aElement.appendChild(divElement)

//    let productimageElement = document.createElement("img")
//    productimageElement.src = product.image

//    let productnameElement = document.createElement("p")
//    productnameElement.innerText = product.name

//    let productPriceElement = document.createElement("p")
//    productPriceElement.innerText = product.price

//    divElement.appendChild(productimageElement)
//    divElement.appendChild(productnameElement)
//    divElement.appendChild(productPriceElement)

//    return liElement
// })

// // console.log(infinixElementList)

// infinixModelsElement.append(...infinixElementList)

// // infinixElementList.forEach(element => {
// //    infinixModelsElement.appendChild(element)
// // })

// // console.log(infinixModelsElement)



// const tecnoModelsElement = document.getElementById("tecno-models")
// // display tecno models from storage
// const tecnoElementList = products.map(function(product, index){
//    let liElement = document.createElement("li")
//    liElement.classList.add("model-tile")
//    liElement.id = index

//    let aElement = document.createElement("a")
//    aElement.id = "itemcartpage-link"
//    aElement.href = `./itemcartpage.html?product=${product.id}`
//    liElement.appendChild(aElement)

//    let divElement = document.createElement("div")
//    aElement.appendChild(divElement)

//    let productimageElement = document.createElement("img")
//    productimageElement.src = product.image

//    let productnameElement = document.createElement("p")
//    productnameElement.innerText = product.name

//    let productPriceElement = document.createElement("p")
//    productPriceElement.innerText = product.price

//    divElement.appendChild(productimageElement)
//    divElement.appendChild(productnameElement)
//    divElement.appendChild(productPriceElement)

//    return liElement
// })

// // console.log(productElementList)

// tecnoModelsElement.append(...tecnoElementList)

// // productElementList.forEach(element => {
// //    iPhoneModelsElement.appendChild(element)
// // })

// // console.log(iPhoneModelsElement)

function getDevicesByBrand(brandName){
   return products.filter(function(product){
      return product.brand.toLocaleLowerCase() === brandName.toLocaleLowerCase()
   })
}

function createProductsHTMLList(products){
   return products.map(function(product, index){
      let liElement = document.createElement("li")
      liElement.classList.add("model-tile")
      liElement.id = index
   
      let aElement = document.createElement("a")
      aElement.id = "itemcartpage-link"
      aElement.href = `./itemcartpage.html?product=${product.id}`
      liElement.appendChild(aElement)
      // aElement.style.textDecoration = 'none'
      aElement.setAttribute('style','text-decoration:none')

   
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
}

const iPhoneModelsElement= document.getElementById('iphone-models')
const samsungModelsElement = document.getElementById("samsung-models")
const tecnoModelsElement = document.getElementById("tecno-models")
const infinixModelsElement = document.getElementById("infinix-models")

infinixModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Infinix")))
tecnoModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Tecno")))
samsungModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Samsung")))
iPhoneModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Apple")))


let cart = JSON.parse(localStorage.getItem("cart"))

if (typeof(cart) === 'object'){
   cart = cart
} else {
   cart = []
}

// Initialise empty cart
// const cart = []
// localStorage.setItem("cart", JSON.stringify(cart))








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