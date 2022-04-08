const products = [
   {
      id: "P001",
      name: "Cola",
      price: 2000,
      image: "http://myimage.png"
   },
   {
      id: "P002",
      name: "Ice tea",
      price: 2500,
      image: "http://myimage.png"
   },
   {
      id: "P003",
      name: "Fata",
      price: 1000,
      image: "http://myimage.png"
   }
]

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