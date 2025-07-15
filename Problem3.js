function generateConditionalOddSeries(a) {
  const count = a % 2 === 0 ? a - 1 : a;
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }

  console.log(result.join(", "));
}

// Try it
generateConditionalOddSeries(6);
generateConditionalOddSeries(4);
generateConditionalOddSeries(2);
