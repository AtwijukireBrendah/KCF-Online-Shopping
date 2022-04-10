
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
