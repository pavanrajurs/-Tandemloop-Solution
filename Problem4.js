function countMultiples(arr) {
  let counts = {};
  for (let i = 1; i <= 9; i++) {
    counts[i] = 0;
    arr.forEach((num) => {
      if (num % i === 0) {
        counts[i]++;
      }
    });
  }
  console.log(counts);
}

let numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
countMultiples(numbers);
