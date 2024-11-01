
function convertToBinary() {
    const displayResult = document.getElementById("display-result");
    let number = document.getElementById("decimalInput").value;

    let result = [];

    displayResult.textContent = "";

    while (number > 0) {
        result.push(number % 2);
        number = (number - (number % 2)) / 2; // Division entière
    }

    displayResult.textContent = result.reverse().join("") || '0';
}