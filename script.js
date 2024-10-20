const inputBox=document.getElementById("input-box")
const listContaner=document.querySelector(".list-contaner")
function addTask(){
    if(inputBox.value===''){
        alert("you must write something")
       } 
       else {
            let li=document.createElement("li")
            li.innerHTML=inputBox.value
            listContaner.appendChild(li)
            let span=document.createElement("span")
            span.innerHTML="\u00d7"
            li.appendChild(span)

        }
        inputBox.value = '';
        saveData()
    
}
listContaner.addEventListener("click" , function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }

    
} ,false)
function saveData(){
localStorage.setItem("data",listContaner.innerHTML)
}
function showTAsk(){
listContaner.innerHTML=localStorage.getItem("data")
}
showTAsk()