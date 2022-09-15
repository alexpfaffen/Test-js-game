const bet = [11, 5, 0, 5, 11, 2];

function verifyBet(bet) {
  const length = bet.length;
  let newBet = [];
  let position = [];
  const IGNORE_VALUES = [11, 12, 13];

  for (let index = 0; index < length; index++) {
    const element = bet[index];
    if (newBet.lenght === 0 && !IGNORE_VALUES.includes(element)) {
      newBet.push(element);
      position.push(index);
    } else {
      if (newBet.includes(element) || element === 0 || newBet.includes(0)) {
        newBet.push(element);
        position.push(index);
      } else {
        newBet = [];
        position = [];
        if (!IGNORE_VALUES.includes(element)) {
          newBet.push(element);
          position.push(index);
        }
      }
    }
    if (newBet.length === 3) {
      const repeat = repeatNumber(newBet);
      return [repeat, position];
    }
  }
}
function repeatNumber(numbers) {
  let repeated = [];

  const key = numbers.filter(function (elemento, i) {
    if (numbers.indexOf(elemento) !== i && elemento !== 0) {
      repeated.push(elemento);
    }
    return numbers.indexOf(elemento) == i;
  });
  return key[0];
}

console.log(verifyBet(bet));
