document.addEventListener('DOMContentLoaded', askPromoCode());

function askPromoCode() {
  let isPromoCodeCorrect = false;

  while (!isPromoCodeCorrect) {
    let promoCode = +prompt('Enter Promocode');
    if (isNaN(promoCode)) {
      alert('Your promocode is not a number');
      continue;
    } else if (!promoCode) {
      alert('You did not enter Promocode');
      continue;
    } else {
      isPromoCodeCorrect = true;
      countDigits(promoCode);
    }
  }
}

function countDigits(promoCode) {
  let b = Math.max(Math.floor(Math.log10(Math.abs(promoCode))), 0) + 1;
  b === 8 ? CreateArrNum(promoCode) : alert('Promocode is not correct');
}

function CreateArrNum(number) {
  output = [];

  while (number) {
    output.push(number % 10);
    number = Math.floor(number / 10);
  }
  output.reverse();
  getResult(output);

  console.log(output);
}

function SumEvenOdds(output) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let a = 0; a < output.length; a++) {
    if (output[a] % 2) {
      sumEven += output[a];
    } else {
      sumOdd += output[a];
    }
  }

  if (sumEven > sumOdd) {
    return false;
  } else {
    return true;
  }
}

function CheckEvenOddEntries(output) {
  let arrOfPair = [
    Number(output.slice(0, 2).join('')),
    Number(output.slice(2, 4).join('')),
    Number(output.slice(4, 6).join('')),
    Number(output.slice(6, 8).join('')),
  ];

  if (
    (arrOfPair[0] % 2 && arrOfPair[2] % 2) ||
    (arrOfPair[1] % 2 && arrOfPair[3] % 2)
  ) {
    return true;
  }
  return false;
}

function getResult(output) {
  function VerifCequence(output) {
    if (
      (output[0] < output[1] && output[4] < output[5]) ||
      (output[2] < output[3] && output[6] < output[7])
    ) {
      return true;
    }
    return false;
  }

  if (CheckEvenOddEntries(output) && VerifCequence(output)) {
    alert('2000');
  } else if (CheckEvenOddEntries(output) && !VerifCequence(output)) {
    alert('1000');
  } else if (
    !CheckEvenOddEntries(output) &&
    !VerifCequence(output) &&
    SumEvenOdds(output)
  ) {
    alert('100');
  } else {
    alert('0');
  }
}
