let ip = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
    if (ip.value.trim() === "") {
        return;
    }
    let item = document.createElement("li");
    item.innerText = ip.value;
    ul.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ip.value = "";
});

ul.addEventListener("click" , function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});