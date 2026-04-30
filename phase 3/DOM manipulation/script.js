function addItem() {
    var input = document.getElementById("listInput");
    var text = input.value;

    if (text == "") {
        document.getElementById("msg1").innerText = "Enter your list";
        return;
    }

    document.getElementById("msg1").innerText = "";

    var li = document.createElement("li");
    li.innerText = text;

    document.getElementById("list").appendChild(li);

    input.value = "";
}

function clearList() {
    document.getElementById("list").innerHTML = "";
}

function addTask() {
    var input = document.getElementById("todoInput");
    var text = input.value;

    if (text == "") {
        document.getElementById("msg2").innerText = "Enter your task";
        return;
    }

    document.getElementById("msg2").innerText = "";

    var li = document.createElement("li");
    li.innerText = text + " ";

    var btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("todo").appendChild(li);

    input.value = "";
}

function clearTask() {
    document.getElementById("todo").innerHTML = "";
}

function toggleBtn() {
    var button = document.getElementById("toggle");

    if (button.innerText == "OFF") {
        button.innerText = "ON";
        button.style.background = "green";
    } else {
        button.innerText = "OFF";
        button.style.background = "red";
    }
}

document.getElementById("add").addEventListener("click", addItem);
document.getElementById("clear1").addEventListener("click", clearList);

document.getElementById("task").addEventListener("click", addTask);
document.getElementById("clear2").addEventListener("click", clearTask);

document.getElementById("toggle").addEventListener("click", toggleBtn);
