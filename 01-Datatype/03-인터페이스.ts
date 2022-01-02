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
