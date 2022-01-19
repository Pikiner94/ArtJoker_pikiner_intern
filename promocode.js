document.addEventListener('DOMContentLoaded', askPromoCode());

function askPromoCode() {
  let isPromoCodeCorrect = false;
  while (!isPromoCodeCorrect) {
    let promoCode = prompt('Enter Promocode');
    if (isNaN(promoCode)) {
      alert('Your promocode is not a number');
      break;
    } else if (!promoCode) {
      alert('You did not enter Promocode');
      break;
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

function createSplitNumbers(promoCode) {
  let splitNumbersPromocode = [];

  while (promoCode) {
    splitNumbersPromocode.push(promoCode % 10);
    promoCode = Math.floor(promoCode / 10);
    break;
  }
  return splitNumbersPromocode.reverse();
}

function compareSumEvenOdds(promoCode) {
  let sumEven = 0;
  let sumOdd = 0;
  const splitNumbersPromocode = createSplitNumbers(promoCode);

  for (let i = 0; i < splitNumbersPromocode.length; ++i) {
    if (splitNumbersPromocode[i] % 2) {
      sumOdd += splitNumbersPromocode[i];
    } else {
      sumEven += splitNumbersPromocode[i];
    }
  }

  if (sumEven > sumOdd) {
    getResult(promoCode);
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

function verifyCequence(promoCode) {
  const splitNumbersPromocode = createSplitNumbers(promoCode);
  return Boolean(
    (splitNumbersPromocode[0] < splitNumbersPromocode[1] &&
      splitNumbersPromocode[4] < splitNumbersPromocode[5]) ||
      (splitNumbersPromocode[2] < splitNumbersPromocode[3] &&
        splitNumbersPromocode[6] < splitNumbersPromocode[7])
  );
}

function getResult(promoCode) {
  const isEvenEntries = checkEvenOddEntries(promoCode);
  const isNumberCequence = verifyCequence(promoCode);

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
