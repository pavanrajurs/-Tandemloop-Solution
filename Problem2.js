function generateSeries(a) {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(", "));
}

generateSeries(5);
