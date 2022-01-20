const checkOddsSequence = (pairEvenNumbers) => {
  let result = true;

  pairEvenNumbers.forEach((elem) => {
    if (elem[0] > elem[1]) {
      result = false;
    }
  });

  result ? alert('Your bonus is 2000') : alert('Your bonus is 1000');
};

const countDigits = (promoCode) => {
  let splitNumbersPromocode = [];

  while (promoCode) {
    splitNumbersPromocode.push(promoCode % 10);
    promoCode = Math.floor(promoCode / 10);
  }

  splitNumbersPromocode.length != 8
    ? alert('You entered less than 8 digits')
    : compareSumEvenOdds(splitNumbersPromocode.reverse());
};

const checkCountOddsPair = (splitNumbersPromocode) => {
  let pairEvenNumbers = [];

  splitNumbersPromocode.forEach((elem, index, arr) => {
    if (
      !(elem % 2 === 0) &&
      !(arr[index + 1] % 2 === 0) &&
      arr[index + 2] % 2 == 0
    ) {
      pairEvenNumbers.push(arr.slice(index, index + 2));
    }
  });

  pairEvenNumbers.length >= 2
    ? checkOddsSequence(pairEvenNumbers)
    : alert('Your bonnus is 100');
};

const compareSumEvenOdds = (splitNumbersPromocode) => {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < splitNumbersPromocode.length; ++i) {
    if (splitNumbersPromocode[i] % 2) {
      sumOdd += splitNumbersPromocode[i];
    } else {
      sumEven += splitNumbersPromocode[i];
    }
  }

  if (sumEven > sumOdd) {
    checkCountOddsPair(splitNumbersPromocode);
  } else {
    alert('0');
  }
};

const askPromoCode = () => {
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
};

document.addEventListener('DOMContentLoaded', askPromoCode());
