// Temukan nilai pada array
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Mencari elemen target dalam array
    }
  }
  return -1; // Mengembalikan -1 jika elemen tidak ditemukan
}

const myArray = [89, 28, 292, 18, 493, 22, 92, 85];
const targetElement = 3000;

const index = findElement(myArray, targetElement);

if (index !== -1) {
  console.log(`Elemen ${targetElement} ditemukan di indeks ${index}`);
} else {
  console.log(`Elemen ${targetElement} tidak ditemukan dalam array`);
}
