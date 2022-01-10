/**
 *  전역공간 최소화
 *
 *  전역공간 == 최상위
 *  1. Window (브라우저)
 *  2. global (nodeJS)
 *
 */

/**
 * *몽키패치*
 * 글로벌 변수 선언시 window에 추가됨
 */
var globalVar = "global";

console.log(globalVar); // global
console.log(window.globalVar); // global

window.setTimeout(() => console.log("1초"), 1000);

/**
 * 변수 오염 반복문
 */
const arr = [10, 20, 30];

for (var index = 0; index < arr.length; index++) {
    //var => window 객체에 저장
}

/**
 * 전역공간을 더럽히지 않기 위해 노력
 *
 * 1. 어디서나 접근 가능하다
 * 2. 스코프 분리에 위험하다.
 *
 * 해답
 *
 * 전역변수를 사용하지 않는다
 * 지역변수를 사용한다.
 * window나 global을 조작하지 않는다
 * IIFE (즉시 실행함수),
 * module,
 * Closure,
 * const, let 으로 변경하기
 *
 *
 */
