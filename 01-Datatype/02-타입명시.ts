
let studentId:number = '1'; //문자열 할당되어 오류발생
studentId = 12345;
let studentName:string = 'jing';
let age:number = 19;
let gender:string = 'male';
let subject:string = 'javascript';
let graduation:boolean = false;


function getStudentDetails(studentId:number):{
    //리턴 타입 명시
    studentId:number
    studentName:string
    age:number 
    gender:string 
    subject:string 
    graduation:boolean
} {
    return {
        //리턴 타입 명시
        studentId,
        studentName,
        age,
        gender,
        subject,
        graduation
    }
}

console.log(getStudentDetails(studentId));