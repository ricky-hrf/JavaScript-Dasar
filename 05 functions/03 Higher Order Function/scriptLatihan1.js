function createClickHandler(message) {
    return function() {
        alert(message);
    };
}

const buttonHello = document.getElementById("buttonHello");
const buttonGoodbye = document.getElementById("buttonbye");

buttonHello.addEventListener("click", createClickHandler("Hello!"));
buttonGoodbye.addEventListener("click", createClickHandler("Goodbye!"));
