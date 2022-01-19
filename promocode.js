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
  let lengthPromoCode =
    Math.max(Math.floor(Math.log10(Math.abs(promoCode))), 0) + 1;
  lengthPromoCode === 8
    ? createNumbers(promoCode)
    : alert('Promocode is not correct');
}

function createNumbers(promoCode) {
  let splitNumbersPromocode = [];
  while (promoCode) {
    splitNumbersPromocode.push(promoCode % 10);
    promoCode = Math.floor(promoCode / 10);
  }
  splitNumbersPromocode.reverse();
  getResult(splitNumbersPromocode);
}

function compareSumEvenOdds(splitNumbersPromocode) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < splitNumbersPromocode.length; ++i) {
    if (splitNumbersPromocode[i] % 2) {
      sumEven += splitNumbersPromocode[i];
    } else {
      sumOdd += splitNumbersPromocode[i];
    }
  }

  if (sumEven > sumOdd) {
    return false;
  } else {
    return true;
  }
}

function checkEvenOddEntries(splitNumbersPromocode) {
  let pairNumbers = [
    Number(splitNumbersPromocode.slice(0, 2).join('')),
    Number(splitNumbersPromocode.slice(2, 4).join('')),
    Number(splitNumbersPromocode.slice(4, 6).join('')),
    Number(splitNumbersPromocode.slice(6, 8).join('')),
  ];
  if (
    (pairNumbers[0] % 2 && pairNumbers[2] % 2) ||
    (pairNumbers[1] % 2 && pairNumbers[3] % 2)
  ) {
    return true;
  }
  return false;
}

function VerifCequence(splitNumbersPromocode) {
  if (
    (splitNumbersPromocode[0] < splitNumbersPromocode[1] &&
      splitNumbersPromocode[4] < splitNumbersPromocode[5]) ||
    (splitNumbersPromocode[2] < splitNumbersPromocode[3] &&
      splitNumbersPromocode[6] < splitNumbersPromocode[7])
  ) {
    return true;
  }
  return false;
}

function getResult(splitNumbersPromocode) {
  if (
    checkEvenOddEntries(splitNumbersPromocode) &&
    VerifCequence(splitNumbersPromocode)
  ) {
    alert('2000');
  } else if (
    checkEvenOddEntries(splitNumbersPromocode) &&
    !VerifCequence(splitNumbersPromocode)
  ) {
    alert('1000');
  } else if (
    !checkEvenOddEntries(splitNumbersPromocode) &&
    !VerifCequence(splitNumbersPromocode) &&
    compareSumEvenOdds(splitNumbersPromocode)
  ) {
    alert('100');
  } else {
    alert('0');
  }
}
