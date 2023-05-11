//get input value
let int=document.getElementById("input-filed");

//get btn
let btnEl=document.getElementById("btn");
//list-item
let listEl=document.getElementById("list-item");


document.addEventListener("DOMContentLoaded",()=>{
    //get data local storage 
    //convert to json parsein normal object
  let getDataLocalStorage=[...JSON.parse(localStorage.getItem("to-do-item"))]  ;
  
  getDataLocalStorage.forEach((item)=>{
    // console.log(item.tolist);
    listEl.insertAdjacentHTML("beforeend",`<li class="item"><p>${item.tolist}</p><img  onclick="remove(event)" src="remove.png"></li>`);
    count();
    
    
  })


})


//create count list

function count() {
    let countEl=document.getElementById("count");
    countEl.innerHTML=`Your have ${listEl.children.length} list`;
}






 //save click appened
btnEl.addEventListener("click",()=>{
//int length
let intLeng=int.value.length;

    if (intLeng>3) {
    listEl.insertAdjacentHTML("beforeend",`<li class="item"><p>${int.value}</p><img  onclick="remove(event)" src="remove.png"></li>`);
    //set localStorage in input value
    localStorage.setItem("to-do-item", JSON.stringify([...JSON.parse( localStorage.getItem("to-do-item") || "[]"),{tolist:int.value},]));
    count();
    int.value="";
    } 
}) 


//keyevent
int.addEventListener("keyup",(event)=>{
let intLeng=int.value.length;

    if (event.key==="Enter"&&intLeng>3) {
        // console.dir(event);
   listEl.insertAdjacentHTML("beforeend",`<li class="item"><p>${int.value}</p><img  onclick="remove(event)" src="remove.png"></li>`);
  int.value="";
    }
    else if((event.ctrlKey)&&event==="z"){
        int.value="";
    }
    

})

//remove item
   
function remove(event){
event.target.closest("li").remove();
// console.log(event.target.closest("li").textContent);
count();
let getDataLocalStorage=[...JSON.parse(localStorage.getItem("to-do-item"))];
  
getDataLocalStorage.forEach((item)=>{
  // console.log(item.tolist);
  if(event.target.closest("li").textContent===item.tolist){
    //remove from local storage
    getDataLocalStorage.splice(getDataLocalStorage.indexOf(item),1);
  }
});
localStorage.setItem("to-do-item",JSON.stringify(getDataLocalStorage));

}






// in this method not working
// function remove() {
//     let iconEl=document.getElementById("icon");
// iconEl.addEventListener("click",(event)=>{
// event.target.closest("li").remove();

// })
// }
// remove();