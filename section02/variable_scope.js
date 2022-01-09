/**
 * var 전역 변수가 오염된 이유
 *
 * if 문이기 떄문에.
 *
 * var는 함수단위 스코프를 가짐
 */

var global = "전역 변수";

if (global === "전역 변수") {
    var global = "지역 변수";

    console.log(global); // 지역 변수
}

console.log(global); // 지역 변수 (전역 변수 오염)

// 함수단위로 짜면 전역 변수가 오염되지 않음

var global = "전역 변수";

(() => {
    var global = "지역 변수";

    console.log(global); // 지역 변수
})();

console.log(global); // 전역 변수

/**
 * let과 const는 block단위 스코프를 가지기 때문에
 * 개발자가 생각한 대로 움직이기 좋음
 */
let global = "전역 변수";

if (global === "전역 변수") {
    let global = "지역 변수";

    console.log(global); // 지역 변수
}

console.log(global); // 전역 변수

/**
 * let보다 const를 지향하자
 *
 * const는 재할당이 불가
 * 선언과 동시에 할당까지
 *
 * const는 재할당만 금지하기 때문에
 * 객체나 배열 조작에는 문제가 없음
 */

const person = {
    name: "eum",
    age: 30,
};

person = {
    // 에러발생 (const 는 재할당 불가)
    name: "eum2",
    age: 32,
};

/**
 * 
 * Error {
 *   person = {
    ^
    TypeError: Assignment to constant variable.
 * }
 */
person.name = "younghyun";
person.age = 32;

console.log(person); // { name: 'younghyun', age: 32 }

// 객체 뿐 아니라 배열도 비슷하게 동작

const person = [
    {
        name: "eum",
        age: 30,
    },
];

person.push({
    name: "younghyun",
    age: 32,
});

console.log(person); // [ { name: 'eum', age: 30 }, { name: 'younghyun', age: 32 } ]
