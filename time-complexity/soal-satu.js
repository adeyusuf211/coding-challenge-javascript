// Temukan nilai tertinggi, terendah serta tertinggi kedua dan terendah kedua
function findSecondMaxAndMin(arr) {
  let max = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;
  let secondMin = Number.POSITIVE_INFINITY;

  for (const element of arr) {
    if (element > max) {
      secondMax = max;
      max = element;
    } else if (element > secondMax && element !== max) {
      secondMax = element;
    }

    if (element < min) {
      secondMin = min;
      min = element;
    } else if (element < secondMin && element !== min) {
      secondMin = element;
    }
  }

  return { secondMax, secondMin };
}

const myArray = [89, 28, 292, 18, 493, 22, 92, 85];
const { secondMax, secondMin } = findSecondMaxAndMin(myArray);

console.log("Nilai tertinggi kedua:", secondMax);
console.log("Nilai terendah kedua:", secondMin);
