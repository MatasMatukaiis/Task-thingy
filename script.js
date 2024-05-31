document.querySelector(".button").addEventListener("click", () => {
    let value = document.querySelector(".item").value;
    if(value == " ") {
        alert(">:(");
    }
    else {
        document.querySelector(".thelist").innerHTML+="<li>"+value+"<input type='checkbox' class='lmao'></li>";
        document.querySelector(".empty").style.display = "none";
        document.querySelector(".item").value = " ";
    }
});

/*
document.querySelector("li input").addEventListener("click", () => {
    let li = document.querySelector("li");
    if(li.style.textDecoration = "none") {
        li.style.textDecoration = "line-through";
    }
    else {
        li.style.textDecoration = "none";
    }
});
*/