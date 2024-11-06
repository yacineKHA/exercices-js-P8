function pairNumbers(numb1, numb2) {

  if (numb1 > numb2) {
    return '';
  }

  let min = Math.min(numb1, numb2);
  let max = Math.max(numb1, numb2);
  let numbList = [];

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      numbList.push(i);
    }
  }

  return numbList.join(',');
}

export default pairNumbers;
