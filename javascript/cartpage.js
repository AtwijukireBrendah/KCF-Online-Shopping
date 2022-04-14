
const cartContainerElement = document.getElementById("cart-container")
const totalAmountElement = document.getElementById("total-cart-amount")


const cartStr = localStorage.getItem("cart")

let cartElements = JSON.parse(cartStr)

//display cart items from storage onto the page
const cartElementList = cartElements.map(function(cartItem, index){
// const cartElementList = cartElements.map(function(cartItem, index){
   let liElement = document.createElement("li")
   liElement.id = index
   // liElement.innerText = cartItem.name


   liElement.classList.add('cartItem');


   // let productImageElement = document.createElement("img")
   // productImageElement.src = cartItem.image
   // productImageElement.setAttribute('style','width:100px;height:100px;')
  
   
   let spanElement=document.createElement('img');
   spanElement.src=cartItem.image
   spanElement.setAttribute('style','display:flex;width: 10%; height:10%;color:white;font-size:x-large')
   
   
   let productNameElement = document.createElement("p")
   productNameElement.innerText = cartItem.name
   productNameElement.setAttribute('style','color:black;font-size:x-large')
  

   let productPriceElement = document.createElement("p")
   productPriceElement.innerText = cartItem.price
   productPriceElement.setAttribute('style','color:green;font-size:x-large')
   
  

   let iconElement=document.createElement('i');
   iconElement.setAttribute('style','width:200px');
   let clearElement=document.createElement("clear")
   clearElement.setAttribute('style','width:200px;background-color:red');

   iconElement.id = 'deleteIcon'
   // delete icon
   iconElement.classList.add("fa-solid");
   iconElement.classList.add("fa-trash-can");
   //<i class="fa-solid fa-trash-can"></i>

   

   // //clear storage items
   clearElement.classList.add("fa-solid")
   clearElement.classList.add("fa-trash-can-list")
   //<i class="fa-solid fa-trash-can-list"></i>

   
   // add event listener to delete icon
   iconElement.addEventListener('click',() => {
      iconElement.parentNode.remove();



// totalAmountElement.innerText = "UGX " + totalAmount
totalAmountElement.innerText = `UGX ${totalAmount}`


       });

       
   clearElement.addEventListener('click',() => {
       window.localStorage.clear(); 
   // localStorage.setItem("storeItems",JSON.stringify([item]));     
                        
           });



   // let editElement=document.createElement('edit');
   // editElement.setAttribute('style','width:200px');
   // let checkElement=document.createElement("mark")
   // checkElement.setAttribute('style','width:200px;background-color:aliceblue');
  
   // spanElement.innerText=item;
   // spanElement.id=index;
   // listElement.innerText=newitem;
   

  
   
   // //edit icon
   // editElement.classList.add("fa-solid");
   // editElement.classList.add("fa-square-pen");
   // // <i class="fa-solid fa-square-pen"></i>
   // //check icon
   // checkElement.classList.add("fa-solid");
   // checkElement.classList.add("fa-square-check");
   // //<i class="fa-solid fa-square-check"></i>
   



   //  clearElement.addEventListener('click',() => {
   //          window.localStorage.clear(); 
   //    // localStorage.setItem("storeItems",JSON.stringify([item]));     
                             
   //  });


   // editElement.addEventListener('click',() => { 
   //     //   item=inputElement.Value;

            
   //     });

   //  checkElement.addEventListener('click',() => {
   //     // window.localStorage.clear();
   //     //change to strikethrough element
   //     //add a css strikethrough class ,add it to the elements strike through list       
                    
   //     });

  
      
       


   liElement.append(spanElement,productNameElement,productPriceElement,iconElement,clearElement);
   // liElement.append(productImageElement);
     //appending span to listElement
      // liElement.append(spanElement,iconElement,editElement,checkElement);

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




