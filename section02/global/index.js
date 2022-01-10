/**
 *  전역공간 최소화
 *
 *  전역공간 == 최상위
 *  1. Window (브라우저)
 *  2. global (nodeJS)
 *
 */

var globalVar = "global";

console.log(globalVar); // global
console.log(window.globalVar); // global

window.setTimeout(() => console.log("1초"), 1000);

/**
 * *몽키패치*
 * 글로벌 변수 선언시 window에 추가됨
 */
