// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) { return 'Vazio!'; }

  let res = [];
  const sortedArr = tech.sort();

  for (const t of sortedArr) {
    res.push({ tech: t, name });
  }

  return res;
}

// Desafio 11

const checkRepeat = (num) => {
  let repeat = 0;

  numArr.map((n) => {
    if (n == num) repeat++;
  });

  if (repeat >= 3) return true;
};

function generatePhoneNumber(numArr = []) {
  if (numArr.length !== 11) return 'Array com tamanho incorreto.';

  let count = 0;
  let notExt = '';

  for (const n of numArr) {
    if (n > 9 || n < 0 || checkRepeat(n)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    if (count >= 2) {
      if (count === 7) { notExt += '-'; }
      notExt += n;
    }
    count++;
  }

  return `(${numArr[0]}${numArr[1]}) ${notExt}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const arr = [lineA, lineB, lineC];
  let count1 = 1;
  let count2 = 2;
  let checkArr = [];

  for (const i in arr) {
    if (arr[i] < arr[Number(i) + count1] + arr[Number(i) + count2]
       && arr[i] > Math.abs(arr[Number(i) + count1] - arr[Number(i) + count2])) {
      checkArr.push(true);
    }

    if (count1 === 0) { count1 = -1; }
    count1 = 0;
    count1--;
    count2--;
  }

  if (checkArr.length === 3) return true;
  return false;
}

// Desafio 13
function hydrate(str) {
  let strArr = str.split(' ');
  let res = 0;

  for (const e of strArr) {
    if (Number(e)) {
      res += Number(e);
    }
  }

  return `${res} ${(res > 1) ? 'copos' : 'copo'} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
