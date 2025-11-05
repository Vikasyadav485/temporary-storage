let numberOfCounts = 0;

function sort(data) {
  let sortedData = data.slice();

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      numberOfCounts++;
      if (sortedData[i] < sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  return sortedData;
}

function medianOf(data){
  const sortedData = sort(data);
  const medianFirstIndex = Math.floor((data.length - 1) / 2);
  const medianSecondIndex = Math.ceil((data.length - 1) / 2);

  return (sortedData[medianFirstIndex] + sortedData[medianSecondIndex]) / 2;
}

function mean(data){
  let sum = 0;
  for(let index = 0;index < data.length; index++){
    sum += data[index];
  }
  return sum / data.length;
}

function deviations(data, mean) {
  let deviationsSquareArray = [];

  for(let index = 0; index < data.length; index++){
    const deviationSquare = (mean - data[index]) ** 2;
    deviationsSquareArray.push(deviationSquare);
  }

  return deviationsSquareArray;
}

function standerdDeviation(data){
  const meanOfData = mean(data);
  const deviationsSquareArray = deviations(data, meanOfData);
  const meanOfDeviationsSquare = mean(deviationsSquareArray);

  return meanOfDeviationsSquare ** 0.5;
}

function randomNumbers(upper, lower) {
  return Math.floor(Math.random() * (upper - lower)) + lower;
}

function generateData(numberOfElements) {
  const data = [];

  for (let index = 0; index < numberOfElements; index++) {
    const element = randomNumbers(50, 1745);
    data.push(element);
  }
  return data;
}

function benchmark(numberOfElements) {
  const data = generateData(numberOfElements);
  sort(data);
  console.log(`${numberOfElements} | ${numberOfCounts}`);
}

const data = generateData(4);

// benchmark(10)

const sortedData = sort(data);

console.log(` data  :  ${data} \n\n sorted data  :  ${sortedData} \n\n median  :  ${medianOf(sortedData)} \n\n mean  :  ${mean(data)}`,)

// console.log(` data  :  ${data} \n\n mean  :  ${mean(data)} \n\n standerdDeviation  :  ${standerdDeviation(data)}`)
