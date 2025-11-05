let numberOfCounts = 0;
let numberOfTypes = 0;

function modeOf(data) {
  let dataToCount = data.slice();
  let highestFrequency = 0;
  let mode;

  for (let i = 0; i < dataToCount.length;) {
    numberOfTypes++;
    let unusedData = [];
    let frequency = 1;

    for (let j = i + 1; j < dataToCount.length; j++) {
      numberOfCounts++;
      if (dataToCount[j] === dataToCount[i]) {
        frequency++;
      } else {
        unusedData.push(dataToCount[j]);
      }
    }

    if (frequency > highestFrequency) {
      highestFrequency = frequency;
      mode = dataToCount[i];
    }
    
    dataToCount = unusedData;
  }

  return mode;
}

// const data = [4, 5, 4, 5, 7, 7, 77, 7, 9, 4, 7, 4, 7,4,6,86,4, 7,57,3,573,2,0,77,3,337,5];
const data = [1,2,3,4,5,6,7,8,9,10,11,12,13];

console.log(modeOf(data), "\n numberOfCounts : ", numberOfCounts, "\n number of elements : ", data.length, "\n number of types : ", numberOfTypes);
