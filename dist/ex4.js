"use strict";
function minEnergy(start, shops, stations, target) {
    let CombinedPoints = [start, ...shops, target];
    let visited = [];
    distanceLists = [];
    //find lowest energy use from start, shops, target to stations
    let minEnergyStationToShop = [];
    for (let i = 0; i < CombinedPoints.length; i++) {
        minEnergyStationToShop[i] = 9999999999;
        visited[i] = 0;
        for (let j = 0; j < stations.length; j++) {
            if (minEnergyStationToShop[i] === -1 ||
                minEnergyStationToShop[i] > Math.abs(CombinedPoints[i] - stations[j])) {
                minEnergyStationToShop[i] = Math.abs(CombinedPoints[i] - stations[j]);
            }
        }
    }
    //Build graph
    let graph = [];
    for (let i = 0; i < CombinedPoints.length; i++) {
        graph[i] = [];
        for (let j = 0; j < CombinedPoints.length; j++) {
            if ((i === 0 && j === CombinedPoints.length - 1) || j == 0) {
                graph[i][j] = 0;
                continue;
            }
            //find shortest path between two points
            const walkDistance = Math.abs(CombinedPoints[i] - CombinedPoints[j]);
            const busDistance = minEnergyStationToShop[i] + minEnergyStationToShop[j];
            if (walkDistance < busDistance) {
                graph[i][j] = walkDistance;
            }
            else {
                graph[i][j] = busDistance;
            }
        }
    }
    //console.log(graph)
    findShortestPath(graph, 0, 0, 0, visited);
    let min = -1;
    for (let i = 0; i <= distanceLists.length; i++) {
        if (min === -1 || min > distanceLists[i]) {
            min = distanceLists[i];
        }
    }
    return min;
}
//dfs
function findShortestPath(graph, start, count, distance, visited) {
    let visitedTemp = [...visited];
    visitedTemp[start] = 1;
    //   console.log(visitedTemp)
    if (count > graph.length - 1)
        return 0;
    if (count === graph.length - 1 && start === graph.length - 1) {
        distanceLists.push(distance);
        return 0;
    }
    for (let i = 0; i < graph.length; i++) {
        if (graph[start][i] != 0 &&
            (i !== graph.length - 1 || count == graph.length - 2) &&
            visitedTemp[i] !== 1) {
            findShortestPath(graph, i, count + 1, distance + graph[start][i], visitedTemp);
        }
    }
    return 0;
}
var distanceLists = [];
// minEnergy(0, [4, 9], [3, 6, 8], 11);
// console.log(minEnergy(0, [4, 9], [3, 6, 8], 11))
// console.log(distanceLists);
// console.log(minEnergy(0, [3,8], [1,98], 99));
// console.log(distanceLists);
