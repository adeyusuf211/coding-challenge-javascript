// Find majority element from array / params
const majorityElement = (nums) => {
  const n = nums.length;
  const threshold = Math.floor(n / 3);

  const countMap = new Map();
  const result = [];

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const [num, count] of countMap.entries()) {
    if (count > threshold) {
      result.push(num);
    }
  }

  return result;
};

const nums1 = [3, 2, 3, 5, 6, 5, 3, 3, 5, 5, 5, 5];
const nums2 = [1, 2, 3, 3, 2];

const result1 = majorityElement(nums1);
const result2 = majorityElement(nums2);

console.log(result1);
console.log(result2);

// Penjelasan

// Fungsi majorityElement adalah fungsi utama yang akan mencari elemen-elemen yang muncul lebih dari ⌊ n/3 ⌋ kali dalam array nums.

// Kami mengambil panjang array nums dan menghitung ambang batas (threshold) dengan menggunakan Math.floor(n / 3). Ambang batas ini mewakili jumlah minimum kemunculan yang harus dicapai oleh elemen agar masuk ke dalam hasil akhir.

// Kami membuat sebuah objek countMap yang akan digunakan untuk menghitung berapa kali setiap elemen muncul dalam array nums. Ini adalah struktur data Map yang memetakan elemen-elemen ke jumlah kemunculan mereka.

// Kami juga membuat sebuah array kosong result yang akan digunakan untuk menyimpan elemen-elemen yang memenuhi syarat.

// Selanjutnya, kami melakukan loop melalui array nums menggunakan pernyataan for...of. Di dalam loop, kami menggunakan objek countMap untuk menghitung berapa kali setiap elemen muncul dalam array.

// Kemudian, setelah loop selesai, kami melakukan loop lain melalui entri-entri objek countMap menggunakan metode .entries(). Ini digunakan untuk memeriksa berapa kali setiap elemen muncul.

// Di dalam loop kedua, kami memeriksa apakah jumlah kemunculan elemen lebih besar dari ambang batas (threshold). Jika iya, elemen tersebut dimasukkan ke dalam array result.

// Akhirnya, kami mengembalikan array result yang berisi elemen-elemen yang memenuhi syarat.

// Setelahnya, kami menggunakan contoh-contoh dengan array nums1 dan nums2 serta mencetak hasilnya ke konsol. Dalam contoh pertama, hanya angka 3 yang muncul lebih dari ⌊ n/3 ⌋ kali, dan dalam contoh kedua, kedua angka 1 dan 2 muncul lebih dari ⌊ n/3 ⌋ kali, sehingga hasilnya sesuai dengan yang diharapkan.
