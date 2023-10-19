// Rotate and count length of string
const rotateString = (s, goal) => {
  if (s.length !== goal.length) {
    return false; // Jika panjang string tidak sama, maka tidak mungkin menjadi sama dengan goal.
  }

  s += s; // Menggabungkan string s dengan dirinya sendiri agar kita dapat memeriksa pergeseran siklik.

  return s.includes(goal);
};

const s = "abcde";
const goal = "cdeab";

const result = rotateString(s, goal);
console.log(result); // Output: true
