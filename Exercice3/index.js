// Créez votre fonction ici
function calculateAverage(numbersArray) {
    let result = 0;
    let average;
    
    try {
        if(numbersArray.length === 0) {
            return `No numbers to calculate average`;
        }
        
        for(let i = 0; i < numbersArray.length; i++) {
            result = result + numbersArray[i];
        }
        
        average = result/numbersArray.length
        return average;
    } catch(error) {
        return "No numbers to calculate average";
    }
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
