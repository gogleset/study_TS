# 타입추론
- 타입스크립트에서는 타입표기가 없는 경우 코드를 읽고 분석하여 타입을 유추해낼 수 있다.
```tsx
let a = 5;
a = 'hello' //error - Type 'string' is not assignable to type 'number'
```
- a라는 변수의 할당을 Number 타입으로 할당하게되면, a라는 변수는 number의 데이터타입을 가지고 있다고 판단하고, 재할당시 number타입이 아니라면 오류를 발생시키게된다.




```tsx
let student = {
    name: 'Jake',
    course: 'Getting Started with TypeScript',
    age: 19,
    young: () => {
        console.log(young age);
    }
}

student.age = '십세' //error
```
- student.age는 이미 number타입으로 할당되어 있기 때문에 ts는 number로 인식


```tsx
const calculator = (num1) =>  100 - (num1) 
```
- num1에서 오류가 나지만, ts는 function안에 있는 연산자로 num1의 타입을 추론, num1을 수정하면 num1:any로 수정시켜준다.


# 타입 명시
- 변수를 선언할 때, 변수 값의 타입을 명시함으로써 변수값의 데이터 타입을 지정

```tsx
let x: string = '나는 문자열';
```

```tsx
function getStudentDetails(studentId:number):{
    //리턴 타입 명시
    studentId:number
    studentName:string
    age:number 
    gender:string 
    subject:string 
    graduation:boolean
} { //함수 시작부분
    return {  //객체 리턴
        studentId,
        studentName,
        age,
        gender,
        subject,
        graduation
    }
} //함수 끝 부분
```
- 함수의 파라미터와 리턴값에도 타입 명시가 가능, 함수 파라미터 뒷부분에 함수의 타입을 명시하고,함수에 리턴값이 없다면 void나 any 타입 명시가 가능하다.


# interface
- 약속 혹은 규칙 정의하기
```tsx
let studentId1:number
studentId1 = 12345;
let studentName1:string = 'jingsoo';
let age1:number = 19;
let gender1:string = 'male';
let subject1:string = 'javascript';
let graduation1:boolean = false;

            //
interface Student{
    //리턴 타입 명시
    studentId1:number;
    studentName1:string;
    age1?:number; //있어도 되고 없어도 되는 선택적 프로퍼티
    gender1:string; 
    subject1:string; 
    graduation1:boolean;
}

function getStudentDetails1(studentId1:number):Student {
    return {
        studentId1,
        studentName1,
        age1,
        gender1,
        subject1,
        graduation1
    }
}
```
1. interface는 객체의 스펙, 함수의 파라미터, 함수의 스펙, 배열과 객체를 접근하는 방식, 클래스에 정의할 수 있다.
1. interface 객체 안에 미리 타입을 정해줄테니 따라와~ 라는 뜻.
1. 물론 옵셔널로 선택적 프로퍼티를 만들 수도 있다. 옵셔널 기호는 ?