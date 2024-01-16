let button=document.getElementById("btn");
let noteBox=document.getElementById("notes-container");
let input=document.getElementsByClassName("inputbox");

function showNotes(){
    noteBox.innerHTML=localStorage.getItem("input");
}

showNotes();

function updatedata(){
    localStorage.setItem("input",noteBox.innerHTML);
}

button.addEventListener("click",function(){
    let inputboxx=document.createElement("p");
    let img=document.createElement("img");
    inputboxx.className="inputbox";
    inputboxx.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    noteBox.appendChild(inputboxx).appendChild(img);
});

noteBox.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updatedata();
    }
    else if(e.target.tagName==="P"){
        input=document.querySelectorAll(".inputbox");
        input.forEach(inn=> {
            inn.onkeyup=function(){
                updatedata();
            }
        });
    }
    document.addEventListener("keydown",function(event){
        if(event.key==="Enter"){
            document.execCommand("insertLineBreak");
            event.preventDefault
        }
    })
})