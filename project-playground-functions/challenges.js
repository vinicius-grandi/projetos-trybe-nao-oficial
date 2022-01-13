// Desafio 1
function compareTrue(boo1, boo2) {
  if (boo1 && boo2) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(stringArr) {
  return `${stringArr[stringArr.length - 1]}, '${stringArr[0]}'`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numArr) {
  let hNum = [];

  for (const n of numArr) {
    if (hNum[0]) {
      if (n > hNum[0]) hNum[0] = n;
    } else {
      hNum.push(n);
    }
  }

  return numArr.filter((n) => n === hNum[0]).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanceC1 = Math.abs(mouse - cat1);
  const distanceC2 = Math.abs(mouse - cat2);

  if (distanceC1 === distanceC2) {
    return 'os gatos trombam e o rato foge.';
  }
  if (distanceC1 < distanceC2) return 'cat1';
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numArr) {
  let res = [];

  for (const n of numArr) {
    if (n % 3 === 0 && n % 5 !== 0) {
      res.push('fizz');
    } else if (n % 5 === 0 && n % 3 !== 0) {
      res.push('buzz');
    } else if (n % 5 === 0 && n % 3 === 0) {
      res.push('fizzbuzz');
    } else {
      res.push('bug!');
    }
  }

  return res;
}

// Desafio 9
function encode(frase) {
  const fraseArr = frase.split('');

  let res = fraseArr.map((e) => {
    switch (e.toLowerCase()) {
    case 'a':
      return 1;
    case 'e':
      return 2;
    case 'i':
      return 3;
    case 'o':
      return 4;
    case 'u':
      return 5;
    }
    return e;
  });
  return res.join('');
}

function decode(frase) {
  const fraseArr = frase.split('');

  let res = fraseArr.map((e) => {
    switch (e) {
    case '1':
      return 'a';
    case '2':
      return 'e';
    case '3':
      return 'i';
    case '4':
      return 'o';
    case '5':
      return 'u';
    }
    return e;
  });
  return res.join('');
}

console.log(decode('2st45 t2st1nd4 2ss1 m1r1v3lh1 d1 pr4gr1m1çã4'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
