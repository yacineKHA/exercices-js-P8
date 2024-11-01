const button = document.getElementById("myButton");
const messageText = document.getElementById("messageText");

console.log(button)

button.addEventListener('click', () => {
    messageText.style.visibility = "visible"
})  