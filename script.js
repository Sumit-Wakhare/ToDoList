let items = document.querySelector("#item");
let to_do_box = document.querySelector("#to-do-box");

items.addEventListener("keyup",(evt)=>{
  if(evt.key=="Enter"){
  addToDo(items.value);
  saveData(items.value);
  items.value ="";
  }
});

const delItem = (item) =>{
   let data = JSON.parse(localStorage.getItem("key")) ||[];
   data = data.filter(todo => todo !== item );
   localStorage.setItem("key",JSON.stringify(data));
}

const addToDo = (item) =>{
  let listItem = document.createElement("li");
  listItem.innerHTML = ` ${item}
  <i class="fa-solid fa-trash"></i> `;
  
  listItem.addEventListener("click",()=>{
    listItem.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click",()=>{
     listItem.remove();
     delItem(listItem.innerText.trim());
    });
   to_do_box.appendChild(listItem);
}
const saveData =(item)=>{
    //local storage 
  const data = JSON.parse(localStorage.getItem("key")) ||[];
   data.push(item);
  localStorage.setItem("key",JSON.stringify(data));
}

(
  function(){
    let items= JSON.parse(localStorage.getItem("key")) ||[];
     items.forEach(item => addToDo(item));
  }
)();
