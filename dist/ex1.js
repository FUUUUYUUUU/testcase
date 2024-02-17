"use strict";
function getClockAngle(hh_mm) {
    let [hh, mm] = [0, 0];
    let [firstAngle, secondAngle] = [0, 0];
    let hh_mm_converted = hh_mm.split(":");
    mm = Number(hh_mm_converted[1]) / 5;
    hh = Number(hh_mm_converted[0]) + mm / 12;
    if (hh >= 12)
        hh = hh - 12;
    if (mm === 12)
        mm = 0;
    firstAngle = Math.abs(hh - mm) * 30;
    secondAngle = 360 - firstAngle;
    let result = firstAngle > secondAngle ? secondAngle : firstAngle;
    result = Math.round(result * 1000) / 1000;
    return result;
    // return the smaller angle between the hour and minute hands of the clock, in degree
    // 0 <= return value <= 180
}
// getClockAngle("2:45");
// console.log(getClockAngle("17:30"));
