// Créez votre fonction ici
function calculate(numb1, numb2, operator) {
    const operators = ['+', '-', '*', '/'];
    const operatorSelected = operator.trim();
  
    if (operators.includes(operatorSelected)) {
      let result;
      switch(operatorSelected) {
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
          if (numb2 === 0) {
            console.error("Division by zero is not allowed");
          }
          result = numb1 / numb2;
          break;
      }
      return result;
    } else {
      console.error("Invalid operator");
    }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
