const inputElement=document.querySelector('#searchbar');
const shoppingList=document.querySelector('#listContainer');





function addItem(){

    //To get input value
    let item=inputElement.value
    // to create a list item
// let listElement=document.createElement('li');
// let iconElement=document.createElement('i');
// iconElement.setAttribute('style','width:100px');
// let spanElement=document.createElement('span');
// let editElement=document.createElement('edit');
// editElement.setAttribute('style','width:100px');
// let checkElement=document.createElement("mark")
// checkElement.setAttribute('style','width:100px;background-color:aliceblue');
// let clearElement=document.createElement("clear")
// clearElement.setAttribute('style','width:200px;background-color:red');


//    //Adding new items to list
// // listElement.innerText=newItem;

// // listElement.innerText=newItem;
// // listElement.id=index;
// listElement.classList.add('list-item');
// spanElement.innerText=item;
// // spanElement.id=index;
   
// console.log(spanElement.innerText);

//     //delete icon
//     iconElement.classList.add("fa-solid");
//     iconElement.classList.add("fa-trash-can");
//     //<i class="fa-solid fa-trash-can"></i>
//     //edit icon
//     editElement.classList.add("fa-solid");
//     editElement.classList.add("fa-square-pen");
//     // <i class="fa-solid fa-square-pen"></i>
//     //check icon
//     checkElement.classList.add("fa-solid");
//     checkElement.classList.add("fa-square-check");
//     //<i class="fa-solid fa-square-check"></i>
//     // clear icon
//     clearElement.classList.add("fa-solid")
//     clearElement.classList.add("fa-trash-can-list")
//    //<i class="fa-solid fa-trash-can-list"></i>

//    // listElement.append(iconElement)
//    listElement.append(spanElement,iconElement,editElement,checkElement);

//    // add list elements to the container
// listContainer.prepend(listElement);
   // Always clear field after entering input
inputElement.value='';

addToLocalStorage(item);


}



inputElement.addEventListener('keypress',function(eventObject) {
if(eventObject.key==="Enter"){

addItem();
            
}

});


function addToLocalStorage(item){
const OutputItems = JSON.parse(localStorage.getItem("storeItems"));
if(OutputItems) {
   //Update Array

   OutputItems.unshift(item);
   localStorage.setItem("storeItems",JSON.stringify(OutputItems));

}
else{

//add it as first item
localStorage.setItem("storeItems",JSON.stringify([item]));

}

}


