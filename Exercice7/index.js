
function convertToBinary() {
    const displayResult = document.getElementById("binaryResult");
    let number = document.getElementById("decimalInput").value;

    if (isNaN(number) || number.trim() === "") {
        displayResult.textContent = ""; 
        return;
    }

    number = parseInt(number, 10);

    let result = [];
    displayResult.textContent = "";

    while (number > 0) {
        result.push(number % 2);
        number = Math.floor(number / 2);
    }

    displayResult.textContent = result.reverse().join("") || '0';
}