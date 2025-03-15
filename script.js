let items = document.querySelector("#item");
let to_do_box = document.querySelector("#to-do-box");

items.addEventListener("keyup",(evt)=>{
  if(evt.key=="Enter"){
  addToDo(items.value);
  items.value ="";
  }
});

const addToDo = (item) =>{
  let listItem = document.createElement("li");
  listItem.innerHTML = ` ${item}
  <i class="fa-solid fa-trash"></i> `;
  listItem.addEventListener("click",()=>{
    listItem.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click",()=>{
     listItem.remove();
  });
  to_do_box.appendChild(listItem);
}
