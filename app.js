let input = document.querySelector(".input");
let btn_add = document.querySelector(".btn_add");
let table = document.querySelector(".tableData");
let id = 1;
let database = [];


function loadData(){
    table.innerHTML = "";  
    for(let i=0; i< database.length;i++){
        let str =`
    <tr>
        <td>${database[i].id}</td>
        <td>${database[i].name}</td>
        <td>
        <button class="edit-button"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete-button"><i class="fa-sharp fa-solid fa-trash"></i></button>
        </td>
    </tr>
    `
    table.innerHTML += str;
   }  
}

function AddData(value){
    let data = value;
       database.push(data);
       id++;
       console.log(database)  
       loadData();
       let editButtons = document.getElementsByClassName("edit-button");
       let deleteButtons = document.getElementsByClassName("delete-button");
       
       for (let i = 0; i < editButtons.length; i++) {
           editButtons[i].addEventListener("click", () => {
                var retVal = prompt("Enter your name : ",database[i].name);
                if(retVal != null){
                   database[i].name = retVal;
                   loadData();    
                }
           });
       }

       for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", () => {
            let Id = database[deleteButtons[i]].id;
            let index = database.findIndex(obj => obj.id == Id);
            database.splice(index,1); 
            loadData();
        });
      }   
}

btn_add.addEventListener("click",(event)=>{
    event.preventDefault();
    let person ={
        id:id,
        name:input.value
    }
    AddData(person);
});

