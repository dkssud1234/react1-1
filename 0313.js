//Number type
let n1 = 1234;
let n2 = 5.678;

//String type
let s1 = "Hello";
let s2 = "world";

//Boolean type
let b1 = true;
let b2 = false;

//Null type
let m = null;

//Undefined type
let u = undefined;
let u2;

//Array type    
let Array = [1, 2, 3, 4, 5];

//Object type
let Object = {
    name: "Ahn",
    age: 24,
    job: "Student"
};

//Number 타입으로만 이루어진 배열
let arr = [1, 2, 3, 4, 5];

//String 타입으로만 이루어진 배열
let arr2 = ["Ahn", "Kim", "Park"];

//Boolean 타입으로만 이루어진 배열
let arr3 = [true, false, true, false];

//Object 타입으로만 이루어진 배열
let arr4 = [{ name: "Ahn", age: 24 }, { name: "Kim", age: 25 }];

//각 타입이 섞여 있는 배열
let arr5 = [1, "Ahn", true, { name: "Ahn", age: 24 }];

//객체의 속성으로 함수가 들어가 있는 경우
let obj = {
    name: "Ahn",
    age: 24,
    print: function () {
        console.log(this.name + " " + this.age);
    }
};
//객체 key값 불러오기
console.log(Object.name);

//객체 속성값 불러오기
console.log(Object["name"]);

//함수 호출
function print() {
    console.log("Hello");
}
print();

//별찍기
for (let i = 0; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += " * ";
    }
    console.log(row);
}