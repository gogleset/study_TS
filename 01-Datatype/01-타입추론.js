"use strict";
let a = 5;
a = "hello"; //type에러-number인데 string 명시
a = 10;
/////////////////////////////////
let student = {
    name: 'Jake',
    course: 'Getting Started with TypeScript',
    age: 19,
    young: () => {
        console.log("young age");
    }
};
student.name = 10; //type에러-string인데 number 명시
/////////////////////////////////
const calculator = (num1) => 100 - (num1); //num1 타입 오류를 funtion안의 연산자로 타입 추론 -> num1:any로 바꿔준다.
