/**
 * 호이스팅의 사전적 정의
 * JavaScript에서 호이스팅(hoisting)이란,
 * 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다.
 * var로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화합니다.
 * 반면 let과 const로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않습니다.
 *
 *  - MDN Web Docs
 * https://developer.mozilla.org/ko/docs/Glossary/Hoisting
 */

/**
 *  호이스팅은 런타임시 선언이 최상단으로 끌어올려지는 것을 뜻함.
 *
 * 문제는 코드 작성시 예측한 대로 실행이 안되는 문제가 발생
 *     1. var를 사용하지 않고 let과 const 사용을 지향한다.
 *     2.function또한 함수 표현식으로 선언을 한다.
 *
 * 예제 1
 */

var global = 0;

function outer() {
  console.log(global); // undefined
  var global = 5;

  function inner() {
    var global = 10;

    console.log(global); // 10
  }

  inner();

  global = 1;

  console.log(global); // 1
}

outer();

/**
 *  outer() 함수의 맨 상단은
 *      var global;
 *      console.log(global);
 *      global = 5;
 *   와 동일하게 동작
 */

/**
 * 예제 2
 *
 * 중복 선언
 * 같은 이름으로 중복 선언을 해도 잘 동작되는게 문제
 */

function duplicatedVar() {
  var a;

  console.log(a); // undefined

  var a = 100;

  console.log(a); // 100
}

duplicatedVar();

/**
 * 예제 3
 *
 * 변수와 함수의 혼용
 *
 * 같은 이름의 변수를 선언하고 함수로 대체해보아도
 * 잘 동작됨
 * => 함수도 호이스팅됨을 뜻함
 */

var sum;

sum = function () {
  return 1 + 2;
};

console.log(sum()); // 3

// 예제 3-2
var sum;

console.log(typeof sum); // 3

function sum() {
  return 1 + 2;
}

console.log(sum()); // 3

// 예제 3-3
var sum;

console.log(sum()); // 10

function sum() {
  return 1 + 2;
}
function sum() {
  return 1 + 2 + 3;
}
function sum() {
  return 1 + 2 + 3 + 4;
}

/**
 * 가장 마지막에 선언된 함수까지 포함되어 호이스팅된다.
 */

// 예제 3-4
var sum = 10;

console.log(sum()); // Error

function sum() {
  return 1 + 2;
}

/**
 *
 * console.log(sum());
 *            ^
 * TypeError: sum is not a function
 *
 * 변수에 할당까지 마무리 되면 함수 호이스팅이 아닌
 * 최상단에 초기화되어 있는 변수가 나옴.
 */

const sum = function () {
  return 1 + 2;
};
console.log(sum());
/**
 * 변수 뿐만 아니라 함수선언시에도
 * const 를 사용해서 함수를 할당하는 것을 추천
 *
 * ※ 함수 표현식 (선언문과 다름, 익명함수를 만들어 변수에 할당)
 * const sum = function () {
 *  return 1 + 2
 * }
 */
