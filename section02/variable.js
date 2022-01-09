// var를 지양하자

console.log(name); // undefined (에러 X)

var name = "이름";
var name = "이름2";
var name = "이름3";
var name = "이름3";
var name = "이름4";
name = "이름5";

console.log(name); // 이름 5

/**
 * var의 특징
 *
 * 같은 변수를 여러번 호출함에도 에러가 뜨지 않고
 * 심지어 선언을 뒤로 미룸에도 에러가 뜨지 않는다.
 *
 * 코드가 확장함에 따라 무결성을 지키기 어려워짐
 */

let name = "이름";
let name = "이름 2";
const name = "const 이름";

/**
 * let과 const는 이런 상황을 미리 방지
 * 
 * ERROR {
 *      let name = "이름";
 *          ^
 *      SyntaxError: Identifier 'name' has already been declared
 * }
 
   const 도 동일
 */

let name;

name = "let 이름";
console.log(name); // let 이름
name = "let 이름2";
console.log(name); // let 이름2
name = "let 이름3";
console.log(name); // let 이름3

/**
 * let은 재할당 가능
 */
