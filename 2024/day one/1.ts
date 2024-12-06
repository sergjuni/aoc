import data from './data.txt';

const dataWithoutWhiteSpace = data.trim();

const dataRows = dataWithoutWhiteSpace.split('\n');

const columns = dataRows.map((row: string) => row.split(/\s+/));

const column1 = columns.map((item: string[]) => item[0]);
const column2 = columns.map((item: string[]) => item[1]);

const locationIdA = column1.map(Number).sort();
const locationIdB = column2.map(Number).sort();

function calcDistance(locationIdA: number[], locationIdB: number[]) {
let totalDifference = 0
for (let i = 0; i < locationIdA.length; i++) {
  console.log
  const diff = Math.abs(locationIdA[i] - locationIdB[i]);
  totalDifference += diff;
}
return totalDifference
}


console.log(calcDistance(locationIdA, locationIdB))
