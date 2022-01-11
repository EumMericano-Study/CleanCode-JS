/**
 * 임시 변수 제거하기
 *
 * 함수 안에서 const 객체의 사용은 지역 공간만을 활용하는
 * 변수이기 때문에 괜찮아 보이지만,
 *
 * 함수가 커질 수록 전역공간처럼 사용되므로 이를 주의해야한다.
 */

/**
 * 임시 변수 리팩토링 과정 1
 *
 * 함수의 역할을
 * DOM 요소를 가져오게만 만들어서
 * 함수 내부에서 CRUD를 하기 애매하게 변환시켜야 한다.
 *
 *
 * ※ 함수에서 DOM에 접근하는 것은
 * 예기치 못한 사이드 이펙트를 유발시키는 함수가 될 수 있다.
 */

// 원래 함수
function getElements() {
    const tempObj = {}; // 임시 객체

    tempObj.title = document.querySelector(".title");
    tempObj.text = document.querySelector(".text");
    tempObj.value = document.querySelector(".value");

    return tempObj;
}

// 1차 변환
function getElements() {
    const result = {
        title: document.querySelector(".title"),
        text: document.querySelector(".text"),
        value: document.querySelector(".value"),
    };

    return result;
}

// 2차 변환
function getElements() {
    return {
        title: document.querySelector(".title"),
        text: document.querySelector(".text"),
        value: document.querySelector(".value"),
    };
}

/**
 * 맨 위의 함수는 굳이 한번 더 접근하는 과정이 있기 때문에
 * 누구나 고칠 수 있는 느낌이 드는데,
 *
 * 그냥 객체로 반환 해버린다면,
 * 사이드 이펙트가 많지 않은 함수로 변환할 수 있다.
 *
 */

/**
 * 임시 변수 리팩토링 과정 2
 *
 * 아래 함수는 기획이나 마케팅의 변경으로
 * 날짜에 대한 추가적인 요구사항을 더해야 할 때
 * 이 함수를 통해 유지보수 하기 어려우니
 * 심각한 영향이 생길 수 있는 함수이다.
 *
 * 이 함수를 사용하는 곳이 많아질 수록
 * 함수의 본래의 기능을 침해하지 않도록
 * 함수는 항상 한가지 일만 하는 것을 목표로 해서 작성하는 것이 옳다.
 * (사이드 이펙트의 최소화)
 */

// 원래 함수
function getDateTime(targetDate) {
    let month = targetDate.getMonth();
    let day = targetDate.getDate();
    let hour = targetDate.Hours();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;
    hour = hour >= 10 ? hour : "0" + hour;

    return {
        month,
        day,
        hour,
    };
}
// 리팩토링 + 추가 기능
function getDateTime(targetDate) {
    const month = targetDate.getMonth();
    const day = targetDate.getDate();
    const hour = targetDate.Hours();

    return {
        month: month >= 10 ? month : "0" + month,
        day: day >= 10 ? day : "0" + day,
        hour: hour >= 10 ? hour : "0" + hour,
    };
}

function getDateTimeWithText() {
    const currentDateTime = getDateTime(new Date());

    return {
        month: currentDateTime.month + "분 전",
        day: currentDateTime.day + "분 전",
        hour: currentDateTime.hour + "분 전",
    };
}

//리팩토링 2차
function getDateTime(targetDate) {
    const month = targetDate.getMonth();
    const day = targetDate.getDate();
    const hour = targetDate.Hours();

    return {
        month: month >= 10 ? month : "0" + month,
        day: day >= 10 ? day : "0" + day,
        hour: hour >= 10 ? hour : "0" + hour,
    };
}

function computedKrDate(date) {
    return date + "분 전";
}

function getDateTimeWithText() {
    const currentDateTime = getDateTime(new Date());

    return {
        month: computedKrDate(currentDateTime.month),
        day: computedKrDate(currentDateTime.day),
        hour: computedKrDate(currentDateTime.hour),
    };
}

/**
 * 이렇게 하나하나 함수의 껍데기를 씌워 나며
 * 추상화를 할 수 있다
 */

/**
 * 임시 변수 리팩토링 과정 3
 *
 * 아래의 함수 또한 한가지 기능만 하므로 좋아보일 수 있지만,
 * 애초에 함수를 만들 때
 * 별도의 동작을 유발 시키는
 * 코드를 작성하지 못하게 하는 것이 좋다.
 */

// 기본 함수
function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max + 1) + min);

    return randomNumber;
}

// 리팩토링
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1) + min);
}

/**
 * 또 다른 임시변수의 위험성
 * 
 * JS 초보자들이 for문을 이용할 때
 * 많이 하는 실수
 * ※ 내가 하던 실수
 * 
 * 아래 같은 코드를 명령형이라고 부른다.
 * 
 * 안에서 사용하는 temp 임시변수가 변하는 포인트들이 너무 많고,
 * 결과적으로는 최종 return되는 값을 예측하기가 너무 어려워 진다.
 */

function getSomeValue(params) {
    let temp = "";

    for (let index = 0; index < array.length; index++) {
        // 이런 저런 템프값을 변경하는 로직
        if (array[index] ??)  temp = array[index];
        temp += array[index];
        temp += array[index];
    }

    if (temp ??) {
        temp = ??
    } else if (temp ??) {
        temp += ??
    }

    return temp;
}


/**
 * 요약: 
 * 임시변수 제거!
 * 명령형으로 가득한 로직을 피해야 한다.
 * 어디서 어떻게 잘 못되었는지 디버극 ㅏ어렵고
 * 추가적인 코드를 작성하고 싶게하는 유횩을 준다
 * (let, temp 같은 함수들은 변환하고 싶어지는 욕구를 준다)
 * 
 * 이를 함수를 나누거나, 바로 반환을 하거나, 
 * 고차함수(map, filter, reduce)를 사용하거나 
 * 선언형 프로그래밍으로 변환하는 습관을 만들어야 한다.
 */