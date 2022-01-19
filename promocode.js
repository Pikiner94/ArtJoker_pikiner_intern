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

  if (lengthPromoCode === 8) {
    compareSumEvenOdds(promoCode);
  } else {
    alert('Promocode is not correct');
  }
}

function compareSumEvenOdds(promoCode) {
  let splitNumbersPromocode = [];

  while (promoCode) {
    splitNumbersPromocode.push(promoCode % 10);
    promoCode = Math.floor(promoCode / 10);
  }
  splitNumbersPromocode.reverse();

  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < splitNumbersPromocode.length; ++i) {
    if (splitNumbersPromocode[i] % 2) {
      sumEven += splitNumbersPromocode[i];
    } else {
      sumOdd += splitNumbersPromocode[i];
    }
  }
  debugger;
  if (sumEven > sumOdd) {
    getResult(splitNumbersPromocode);
  } else {
    alert('0');
  }
}

function checkEvenOddEntries(promoCode) {
  let pairNumbers = [];

  while (promoCode) {
    pairNumbers.push(promoCode % 100);
    promoCode = Math.floor(promoCode / 100);
  }
  pairNumbers.reverse();

  return Boolean(
    (pairNumbers[0] % 2 && pairNumbers[2] % 2) ||
      (pairNumbers[1] % 2 && pairNumbers[3] % 2)
  );
}

function verifyCequence(splitNumbersPromocode) {
  return Boolean(
    (splitNumbersPromocode[0] < splitNumbersPromocode[1] &&
      splitNumbersPromocode[4] < splitNumbersPromocode[5]) ||
      (splitNumbersPromocode[2] < splitNumbersPromocode[3] &&
        splitNumbersPromocode[6] < splitNumbersPromocode[7])
  );
}

function getResult(splitNumbersPromocode) {
  const isEvenEntries = checkEvenOddEntries(splitNumbersPromocode);
  const isNumberCequence = verifyCequence(splitNumbersPromocode);

  if (isEvenEntries && isNumberCequence) {
    alert('2000');
  } else if (isEvenEntries && !isNumberCequence) {
    alert('1000');
  } else if (!isEvenEntries && !isNumberCequence) {
    alert('100');
  } else {
    alert('0');
  }
}
