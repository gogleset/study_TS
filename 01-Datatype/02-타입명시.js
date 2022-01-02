var studentId = '1'; //문자열 할당되어 오류발생
studentId = 12345;
var studentName = 'jing';
var age = 19;
var gender = 'male';
var subject = 'javascript';
var graduation = false;
function getStudentDetails(studentId) {
    return {
        //리턴 타입 명시
        studentId: studentId,
        studentName: studentName,
        age: age,
        gender: gender,
        subject: subject,
        graduation: graduation
    };
}
console.log(getStudentDetails(studentId));
