const addButton=document.querySelector(".addButton");
var input=document.querySelector(".inputtext")
let date=document.querySelector('input[type="date"]');

//Fetch the Container
const container=document.querySelector('.dataContainer');

//class and constructor
class reminder{

    constructor(reminderName,dateNew){

        this.createReminder(reminderName,dateNew)
    }
//create reminder
createReminder(reminderName,dateNew){

//create divison itembox and later append
let itemBox=document.createElement("div")
itemBox.classList.add("item")

//Append Container
container.appendChild(itemBox)

//create label
let label=document.createElement("input");
label.value=date.value;

//input box create  
let input=document.createElement("input");
input.value=reminderName;
input.disabled=true;
input.classList.add("card-text");
input.style.width='13rem';
input.style.marginTop='11px';

// input.style.paddingTop="5px";
input.style.paddingBottom="7px";

//Append label box
itemBox.appendChild(label)

//Append input box
itemBox.appendChild(input)

//create edit button
let editButton=document.createElement("button");
editButton.classList.add("btn");
editButton.classList.add("btn-primary")
editButton.style.paddingLeft="20px";
editButton.style.paddingRight="20px";
editButton.style.marginLeft="6px";
editButton.innerHTML="EDIT"

//Append edit button
itemBox.appendChild(editButton)

//create delete button
let removeButton=document.createElement("button");
removeButton.classList.add("btn");
removeButton.classList.add("btn-primary");
removeButton.style.paddingLeft="6px";
removeButton.style.paddingRight="6px";
removeButton.style.marginLeft="6px";
removeButton.innerHTML="DELETE"

//Append delete button
itemBox.appendChild(removeButton)

//Add eventlistener
editButton.addEventListener('click',()=>{
    this.edit(input);
})

//Add eventlistener 
removeButton.addEventListener('click',()=>{
    this.delete(itemBox)
})
//////////
}
//edit reminder
edit(reminderitem){
    reminderitem.disabled=!reminderitem.disabled
}
//delete reminder
delete(reminderitem){
    container.removeChild(reminderitem)
}

}


//check whether the reminder and date is entered or not
function check(){
    if(input.value!==" " && date.value!==" " )
    {
        new reminder(input.value,date.value);    
  
        input.value="";
      date.value="";
    }
}
//check the inputs and date while clicking on adding
addButton.addEventListener("click",check);