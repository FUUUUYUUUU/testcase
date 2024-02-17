"use strict";
function quickestPath(board) {
    let n = 100;
    let map = [];
    let portal = [];
    let moveLog = [];
    for (let i = 1; i <= n; i++) {
        map[i] = -1;
        portal[i] = -1;
    }
    //add ladders to portal
    for (let i of board.ladders) {
        portal[i[0]] = i[1];
    }
    //add snakes to portal
    for (let i of board.snakes) {
        portal[i[0]] = i[1];
    }
    map[1] = 0;
    for (let i = 1; i <= n; i++) {
        //roll the dice 1-6
        for (let j = 1; j <= 6; j++) {
            if (map[i + j] === -1 || map[i] + 1 < map[i + j]) {
                map[i + j] = map[i] + 1;
                if (portal[i + j] != -1) {
                    map[portal[i + j]] = map[i] + 1;
                    if (portal[i + j] < i) {
                        i = portal[i + j];
                    }
                }
            }
        }
    }
    //find dice rolled log
    let max = map[n];
    let end = n;
    map[1] = 0;
    for (let i = max; i >= 0; i--) {
        let check = 0;
        for (let j = 6; j >= 1; j--) {
            if (map[end - j] === i - 1) {
                check = 1;
                moveLog[i - 1] = j;
                end = end - j;
                break;
            }
        }
        if (check === 0) {
            for (let k = 0; k <= n; k++) {
                if (portal[k] === end) {
                    end = k;
                    i = i + 1;
                    break;
                }
            }
        }
    }
    //console.log(map)
    //console.log(moveLog);
    return moveLog;
}
// quickestPath({
//   ladders: [
//     [3, 39],
//     [14, 35],
//     [31, 70],
//     [44, 65],
//     [47, 86],
//     [63, 83],
//     [71, 93],
//   ],
//   snakes: [
//     [21, 4],
//     [30, 8],
//     [55, 38],
//     [79, 42],
//     [87, 54],
//     [91, 48],
//     [96, 66],
//   ],
// });
// console.log(
//   quickestPath({
//     ladders: [
//       [3, 39],
//       [14, 35],
//       [31, 70],
//       [44, 65],
//       [47, 86],
//       [63, 83],
//       [71, 93],
//     ],
//     snakes: [
//       [21, 4],
//       [30, 8],
//       [55, 38],
//       [79, 42],
//       [87, 54],
//       [91, 48],
//       [96, 66],
//     ],
//   })
// );
// console.log(
//   quickestPath({
//     ladders: [
//       [14, 28],
//       [42, 78],
//       [55, 97],
//       [52, 92],
//     ],
//     snakes: [
//       [99, 25],
//       [88, 54],
//       [29, 10],
//     ],
//   })
// );
// console.log(
//   quickestPath({
//     ladders: [
//       [6, 46],
//       [19, 43],
//       [52, 71],
//       [57, 98],
//     ],
//     snakes: [
//       [47, 9],
//       [62, 40],
//       [96, 75],
//     ],
//   })
// );
