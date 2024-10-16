const fs = require('fs');
eval(fs.readFileSync('code.js') + '');

let graph1 = [
  [[1, 3], [2, 5], [4, 2]],    // A
  [[0, 3], [2, 2], [3, 4]],    // B
  [[1, 2], [3, 6]],            // C
  [[1, 4], [2, 6], [4, 1]],    // D
  [[0, 2], [3, 1]]             // E
];
let expected1 = [0, 3, 5, 3, 2];  

let result1 = dijkstra(graph1, 0);
if (JSON.stringify(result1) !== JSON.stringify(expected1)) { // compares result 
  throw new Error(`test 1 failed`);
}

let graph2 = [
  [[1, 7], [2, 9], [3, 14]],   // A
  [[0, 7], [2, 10], [4, 15]],  // B
  [[0, 9], [1, 10], [3, 2], [4, 11]],  // C
  [[0, 14], [2, 2], [4, 6]],   // D
  [[1, 15], [2, 11], [3, 6]]   // E
];
let expected2 = [0, 7, 9, 11, 17];  

let result2 = dijkstra(graph2, 0);
if (JSON.stringify(result2) !== JSON.stringify(expected2)) { // compares result 
  throw new Error(`test 2 failed`);
}

let graph3 = [
  [[1, 2], [2, 4]],    // A
  [[0, 2], [2, 1]],    // B
  [[0, 4], [1, 1]],    // C
  [],                  // D 
];
let expected3 = [0, 2, 3, Infinity];  

let result3 = dijkstra(graph3, 0);
if (JSON.stringify(result3) !== JSON.stringify(expected3)) { // compares result 
  throw new Error(`test 3 failed`);
}


let graph4 = [];
let expected4 = []; 

let result4 = dijkstra(graph4, 0);
if (JSON.stringify(result4) !== JSON.stringify(expected4)) { // compares result 
  throw new Error(`test 4 failed`);
}

let graph5 = [[]]; 
let expected5 = [0]; 

let result5 = dijkstra(graph5, 0);
if (JSON.stringify(result5) !== JSON.stringify(expected5)) { // compares result 
  throw new Error(`test 5 failed`);
}

console.log("all tests passed");
