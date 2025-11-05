const akshayEarnings = [123.69, 62.77, 48.56, 101.89, 54.99, 75.37, 77.66, 179.15,
  203.39, 35.87, 123.97, 106.77, 108.39, 95.19, 90.94, 181.44, 115.93, 41.53,
  140.54, 139.41, 140.30, 149.10, 221.67, 194.48, 218.12, 197.34, 308.02,
  191.95, 154.48, 271.99, 207.09, 290.59, 280.27, 318.57];

const salmanEarnings = [46, 215, 185.1, 230, 320, 265, 186.37, 378, 922.03,
  405.85, 627.82, 211.25, 558, 300, 321, 218];
const aamirEarnings = [27.26, 180.83, 558, 770, 2070.3, 905, 335];

const shahrukhEarnings = [224.4, 206.73, 210.35, 235.7, 422, 397, 388, 182.3, 136.12, 285, 111.04, 178];
const ajayEarnings = [143.9, 232.18, 154.19, 123.5, 308.62, 147.29, 110.4, 57.78, 216.56, 63.74, 47.45,
  150, 175, 15.42, 32.6, 151.27, 28.91, 3.55, 162.3, 13.64, 55.47, 145.5, 41.12];

function sumOf(numbers) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += numbers[index];
  }
  return sum;
}

function mean(data) {
  return sumOf(data) / data.length;
}

function deviations(data, mean) {
  let deviationsSquare = [];

  for (let index = 0; index < data.length; index++) {
    const deviationSquare = (mean - data[index]) ** 2;
    deviationsSquare.push(deviationSquare);
  }

  return deviationsSquare;
}

function standerdDeviation(data) {
  const deviationsSquare = deviations(data, mean(data));

  return mean(deviationsSquare) ** 0.5;
}

function provideData(actorName) {
  switch (actorName) {
    case "akshay":
      return akshayEarnings;
    case "salman":
      return salmanEarnings;
    case "shahrukh":
      return shahrukhEarnings;
    case "aamir":
      return aamirEarnings;
    case "ajay":
      return ajayEarnings;
  }
}

const actorName = prompt("Write here actor name : ");
const data = provideData(actorName);

console.log(`\nData of ${actorName} movies earnings from 2010 to 2019 in crores : 

  Standerd deviation  : ${standerdDeviation(data)}
  Mean                : ${mean(data)}
  `);
