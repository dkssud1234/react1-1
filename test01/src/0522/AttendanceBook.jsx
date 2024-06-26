import React from 'react';

const students = [
    { name: "홍길동1" },
    { name: "홍길동2" },
    { name: "홍길동3" },
    { name: "홍길동4" }
];

export default function AttendanceBook() {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>;
            })}
        </ul>
    );
}
