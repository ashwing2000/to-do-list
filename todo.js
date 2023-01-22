const toDoItems = document.querySelector(".to-do-items");
const input = document.getElementById("userinput");
const button = document.getElementById("enter");
const trashIcon = document.getElementById("delete");
var body = document.getElementById("gradient");

index = 0;
function inputValue() {
    return input.value.length;
}
button.addEventListener("click", function () {
    if (inputValue() > 0 && input.value.trim().length > 0) {
        createElement();
    }
})
input.addEventListener("keypress", function (e) {
    if (inputValue() > 0 && input.value.trim().length > 0 && e.keyCode === 13) {
        createElement();
    }
})

function createElement() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checked = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "items";
    divParent.innerHTML = '<div>' + input.value + '</div>';

    checked.className = "fas fa-check-square";
    checked.addEventListener("click", function () {
        checked.style.color = "limegreen";

    })

    divChild.appendChild(checked);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "red"
    trashIcon.addEventListener("click", function () {
        divParent.remove();
    })
    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);
    input.value = '';

    var colors1 = ["red", "blue", "orange", "green", "yellow", "voilet", "purple"];
    var colors2 = ["cyan", "navy", "maroon", "indigo", "limegreen", "olive", "khaki"];
    document.getElementsByTagName("body")[0].style.background = "linear-gradient(to right, " + colors1[index++] + " ," + colors2[index++] + ")"


    if (index > colors1.length - 1 && index > colors2.length - 1) index = 0;

}

// function addAfterClick() {
//     if (inputValue() > 0 && userInput.value.trim().length > 0) {
//         createElement();
//     }
// }
// function addAfterKeypress(e) {
//     if (inputValue() > 0 && userInput.value.trim().length > 0 && e.keyCode === 13) {
//         createElement();
//     }
// }
