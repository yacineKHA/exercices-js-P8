// Créez votre fonction ici
function calculate(numb1, numb2, operator) {

  numb1 = Number(numb1);
  numb2 = Number(numb2);

  const operators = ['+', '-', '*', '/'];
  const operatorSelected = String(operator).trim();

  if (operators.includes(operatorSelected)) {
    if (operatorSelected === '/' && numb2 === 0) {
      return "Division by zero is not allowed";
    }

    let result;
    switch (operatorSelected) {
      case '+':
        result = numb1 + numb2;
        break;
      case '-':
        result = numb1 - numb2;
        break;
      case '*':
        result = numb1 * numb2;
        break;
      case '/':
        result = numb1 / numb2;
        break;
    }
    return result;
  } else {
    return "Invalid operator";
  }
}

export default calculate
