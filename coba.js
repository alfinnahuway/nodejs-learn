// const fibonanci = (v1, v2, len) => {
//   let total;
//   let resultArray = [v1, v2];
//   for (let i = 0; i < len; i++) {
//     total = v1 + v2;
//     resultArray.push(total);
//     v1 = v2;
//     v2 = total;
//   }

//   return resultArray;
// };

// console.log(fibonanci(-1, 1, 8));

let stars = "";

for (let i = 4; i > 0; i--) {
  for (let j = 0; j <= 4; j++) {
    if (j >= i) {
      stars += "*";
    } else {
      stars += " ";
    }
  }
  stars += "\n";
}

console.log(stars);
