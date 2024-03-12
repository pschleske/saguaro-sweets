// [0, 200, 100, 400, 300, 500, 100, 200, 0] => 800
// --------

// function calculateElevation(arr) {
//     let elevationGain = 0;
//     // let currentElevation = arr[0];
//     let previousElevation = arr[0];
//     let valleyElevation = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > previousElevation && (i === arr.length - 1 || arr[i] > arr[i + 1])) {
//             elevationGain += arr[i] - valleyElevation;
//             valleyElevation = arr[i];
//         } else if (arr[i] < previousElevation && (i === arr.length - 1 || arr[i] < arr[i + 1])) {
//             valleyElevation = arr[i];
//         }
//         previousElevation = arr[i];
//     }

//     return elevationGain;
// }


// console.log(calculateElevation([0, 200, 100, 400, 300, 500, 100, 200, 0]))