const products = [
   {
      id: "P001",
      name: "iPhone X",
      description:"Apple iPhone X is the latest iPhone to mark Apple's 10th anniversary. It is powered by Apple's latest A11 Bionic chip. ",
      price: " UGX 2,000,000",
      image: "assets/Images/iphones/iphonex.png",
      brand: "Apple",
      color: "White",
      stock:"50",
   },
   {
      id: "P002",
      name: "iPhone-11",
      description:"Apple iPhone 11 is powered by the Apple A13 Bionic processor. The smartphone comes with a 6.1 inches Liquid Retina IPS LCD capacitive touchscreen and 828 x 1792 pixels resolution",
      price: "UGX 3,000,000",
      image: "assets/Images/iphones/apple-iphone-11.jpg",
      brand: "Apple",
      color: "Pale green",
      stock:"50",
   },
   {
      id: "P003",
      name: "iPhone-12",
      description:"6.1-inch (15.5 cm diagonal) Super Retina XDR display Ceramic Shield, tougher than any smartphone glassA14 Bionic chip, the fastest chip ever in a smartphone",
      price: "UGX 4,000,000",
      image: "assets/Images/iphones/apple-iphone-12-pro--.jpg",
      brand: "Apple",
      color: "Black",
      stock:"50",
   },
   {
      id: "P004",
      name: "iPhone-13",
      description:"Introduced on September 14, 2021, the iPhone 13 and iPhone 13 mini are Apple's newest flagship iPhones at the more affordable end, and are being sold alongside the more expensive iPhone 13 Pro and iPhone 13 Pro Max. ",
      price: "UGX 5,000,000",
      image: "assets/Images/iphones/apple-iphone-13-pro-max.jpg",
      brand: "Apple",
      color: "Blue",
      stock:"50",
   },

   {
      id: "S001",
      name: "samsung galaxy s22",
      description:"A better way to think about the Galaxy S22 is to consider the value it delivers. Opt for this model, and you'll get the same Snapdragon 8 Gen 1 chipset that powers Samsung's flashier S22 options",
      price: "UGX 350,000",
      image: "assets/Images/samsung/samsung galaxy s22.webp",
      brand: "Samsung",
      color: "White",
      stock:"50",

   },
   {
      id: "S002",
      name: "samsung-galaxy-s21-ultra-5g",
      description:"Cameras are the main star of the Samsung Galaxy S21 Ultra 5G. There's a new-generation 108-megapixel primary camera,12-megapixel ultra-wide-angle camera and two telephoto cameras.",
      price: "UGX 350,000",
      image: "assets/Images/samsung/samsung-galaxy-s21-ultra-5g-.jpg",
       brand: "Samsung",
       color: "Blue",
       stock:"50",

   },
   {
      id: "S003",
      name: "samsung-galaxy-m32-5g",
      description:"MediaTek | Dimensity 720 Octa Core 2GHz Processor with the widest 12 band support for a True 5G experience",
      price: "UGX 350,000",
      image: "assets/Images/samsung/samsung-galaxy-m32-5g-.jpg",
      brand: "Samsung",
      color: "White",
      stock:"50",

   },
   {
      id: "S004",
      name: "samsung-galaxy-z-fold3-5g",
      description:"Main Display - 19.19cm (7'6) Infinity Flex Display with an Under Display Camera, Dynamic AMOLED 2X  with Adaptive Refresh Rate. Cover Display - 15.82cm (6.2”) Infinity-O Display, Switchable 60/120Hz",
      price: "UGX 350,000",
      image: "assets/Images/samsung/samsung-galaxy-z-fold3-5g.jpg",
       brand: "Samsung",
       color: "Pink",
       stock:"50",
   },

   {
      id: "T001",
      name: "tecno-spark-go",
      description:"Tecno Spark Go 2021 mobile was launched on 1st July 2021. The phone comes with a 6.52-inch touchscreen display offering a resolution of 720x1600 pixels and an aspect ratio of 20:9.",
      price: "UGX 350,000",
      image: "assets/Images/tecno/tecno-spark-go-2021.jpg",
      brand: "Tecno",
      color: "Green",
      stock:"50",
   },
   {
      id: "T002",
      name: "tecno-camon-18p",
      description:"The Tecno Camon 18P is the direct successor to the 17P launched few months ago and the higher version of the vanilla Camon 18. Though both phone has same display specification, but this model benefits from a stronger CPU, and an added telephoto camera len",
      price: "UGX 350,000",
      image: "assets/Images/tecno/tecno-camon-18p.jpg",
      brand: "Tecno",
      color: "White",
      stock:"50",
   },
   {
      id: "T003",
      name: "tecno-spark-8",
      description:"Tecno Spark 8 is officially released on Sept. 2, 2021. The smartphone is powered by the Mediatek MT6762 Helio P22 Octa-core processor while the GPU is PowerVR GE8320. ",
      price: "UGX 350,000",
      image: "assets/Images/tecno/tecno-spark-8.jpg",
      brand: "Tecno",
      color: "Pink",
      stock:"50",
   },
   {
      id: "T004",
      name: "tecno-pop5",
      description:"Tecno Pop 5 is officially released on July 26, 2021.The smartphone is powered by the Quad-core 1.3 GHz Cortex-A7 processor and it comes with a 6.1 inches IPS LCD display. It provides with 720 x 1560 pixels resolution.",
      price: "UGX 350,000",
      image: "assets/Images/tecno/tecno-pop5.jpg",
      brand: "Tecno",
      color: "Blue",
      stock:"50",
   },

   {
      id: "F001",
      name: "infinix-hot10s",
      description:"Infinix Hot 10S mobile was launched on 22nd April 2021. The phone comes with a 6.82-inch touchscreen display offering a resolution of 720x1640 pixels and an aspect ratio of 20.5:9. Infinix Hot 10S is powered by an octa-core MediaTek Helio G85 processor. ",
      price: "UGX 350,000",
      image: "assets/Images/infinix/hot10s.jpg",
      brand: "Infinix",
      color: "Blue",
      stock:"50",
   },
   {
      id: "F003",
      name: "infinix-zero8",
      description:"With this Infinix-zero8 phone, you can enjoy the best of design and innovative features. It has a 17.4 cm (6.85) FHD + dual pinhole display that will give you an immersive and expansive view of the screen",
      price: "UGX 350,000",
      image: "assets/Images/infinix/zero8.jpg",
       brand: "Infinix",
       color: "Grey",
       stock:"50",
   },
   {
      id: "F003",
      name: "infinix-hot10lite",
      description:"Hot 10 Lite is the smaller version of the Hot 10 from Infinix. This has triple rear camera, and powered by a quad-core CPU and 2GB RAM. ",
      price: "UGX 350,000",
      image: "assets/Images/infinix/hot10lite.jpg",
       brand: "Infinix",
       color: "Grey",
       stock:"50",
   },
   {
      id: "F004",
      name: "infinx-Note10",
      description:"6.95 Display, 6 GB RAM, 64GB/128GB storage, microSDXC, 48MP Camera, 5000 mAh Battery.",
      price: "UGX 350,000",
      image: "assets/Images/infinix/Note10.jpg",
      brand: "Infinix",
      color: "Blue",
      stock:"50",
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
   
      let productImageElement = document.createElement("img")
      productImageElement.src = product.image
   
      let productNameElement = document.createElement("p")
      productNameElement.innerText = product.name
      productNameElement.setAttribute('style','color:black;font-size:large')
   
      let productPriceElement = document.createElement("p")
      productPriceElement.innerText = product.price
      productPriceElement.setAttribute('style','color:black;font-size:x-large')
   
      divElement.appendChild(productImageElement)
      divElement.appendChild(productNameElement)
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






// search items

function searchProduct(name){
   return products.filter(function(product) {
      return product.name.toLowerCase().includes(name.toLowerCase())
   })
}
function registerEvents(){
   document.getElementById("btnSearch").addEventListener("click", function(e) {
      let searchInput = document.getElementById("searchbar").value
      let searchResults = searchProduct(searchInput)
      console.log(searchResults)
      alert(searchResults)
   })
}

registerEvents()
