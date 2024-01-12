// String

// 1.

// let str = "    Azizbek Xotamaliyev     ";

// String.prototype.trm = function () {
//   let res = "";
//   for (let i = 0; i < this.length; i++) {
//     if (
//       (this[i] === " " && this[i - 1] !== " " && this[i + 1] !== " ") ||
//       this[i] !== " "
//     ) {
//       res += this[i];
//     }
//   }
//   return res;
// };

// console.log(str.trm());

// 2.

// let str = "Azizbek Xotamaliyev";

// String.prototype.upperCase = function () {
//   let res = "";
//   for (let el of this) {
//     if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
//       res += String.fromCharCode(el.charCodeAt() - 32);
//     } else {
//       res += el;
//     }
//   }
//   return res;
// };

// console.log(str.upperCase());

// 3.

// let str = "Azizbek Xotamaliyev";

// String.prototype.has = function (letter) {
//   let res = false;
//   for (let i = 0; i < this.length; i++) {
//     let temp = "";
//     for (let j = 0; j < letter.length; j++) {
//       temp += this[i + j];
//     }
//     if (letter === temp) {
//       res = true;
//       break;
//     }
//   }
//   return res;
// };

// console.log(str.has("ziz"));

// 4.

// let str = "Azizbek Xotamaliyev";

// String.prototype.cut = function (start, stop) {
//   let res = "";
//   for (let i = start; i < stop; i++) {
//     res += this[i];
//   }
//   return res;
// };

// console.log(str.cut(2, 5));

// 5.

// let str = "Azizbek Xotamaliyev";

// String.prototype.rpt = function (num) {
//   let res = "";
//   for (let i = 0; i < num; i++) {
//     res += this;
//   }
//   return res;
// };

// console.log(str.rpt(5));

// Number

// 1.

// let num = 5.4953;

// Number.prototype.fixed = function (num) {
//   let res;
//   let temp;
//   if (!num) {
//     if (this % 1 < 0.5) {
//       res = this - (this % 1);
//     } else {
//       res = this + (1 - (this % 1));
//     }
//   } else {
//     temp = 10 ** num;
//     console.log(temp);
//     if ((this * temp) % 1 < 0.5) {
//       res = this * temp - ((this * temp) % 1);
//     } else {
//       res = this * temp + (1 - ((this * temp) % 1));
//     }
//   }
//   return res / temp;
// };

// console.log(num.fixed(3));

// 2.

// let num = 5.4953;

// Number.prototype.round = function () {
//   let res;

//   if (this % 1 < 0.5) {
//     res = this - (this % 1);
//   } else {
//     res = this + (1 - (this % 1));
//   }

//   return res;
// };

// console.log(num.round());

// 3.

// let num = 9;

// Number.prototype.isSquare = function () {
//   let res;
//   let temp = this ** (1 / 2);
//   if (temp % 1 === 0) {
//     res = true;
//   } else {
//     res = false;
//   }

//   return res;
// };

// console.log(num.isSquare());

// 4.

// let num = 3053;

// Number.prototype.count = function () {
//   let res = 0;
//   let temp = this;

//   while (temp >= 1) {
//     temp /= 10;
//     res++;
//   }
//   return res;
// };

// console.log(num.count());

// 5.

// let num = 30953;

// Number.prototype.sum = function () {
//   let res = 0;
//   let temp = this;

//   while (temp >= 1) {
//     res += temp % 10;
//     temp -= temp % 10;
//     temp /= 10;
//   }
//   return res;
// };

// console.log(num.sum());

// Array

// 1.

// let arr = [5, 2, 3, 5];

// Array.prototype.customMap = function (clbck) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     let el = clbck(this[i], i, this);
//     res[i] = el;
//   }
//   return res;
// };

// console.log(arr.customMap((e) => e * 2));

// 2.

// let arr = [5, 2, 3, 5];

// Array.prototype.customEvery = function (clbck) {
//   let res = false;
//   for (let i = 0; i < this.length; i++) {
//     if (clbck(this[i], i, this)) {
//       res = true;
//     } else {
//       res = false;
//       break;
//     }
//   }
//   return res;
// };

// console.log(arr.customEvery((e) => e > 2));

// 3.

// let arr = [5, 2, 3, 5];

// Array.prototype.customReduce = function (clbck, curVal=0) {
//   let res = curVal;
//   for (let i = 0; i < this.length; i++) {
//     res = clbck(res, this[i], i, this);
//   }
//   return res;
// };

// console.log(arr.customReduce((acc, el) => acc*el, 1));

// 4.

// let arr = [5, 2, 3, 5];

// Array.prototype.customFindIndex = function (clbck) {
//   for (var i = 0; i < this.length; ++i) {
//     if (clbck(this[i])) return i;
//   }
//   return -1;
// };

// console.log(arr.customFindIndex((el) => el < 4));

// 5.

// let arr = [5, 2, 3, 5];

// Array.prototype.customSplice = function (first, howD, ...rest) {
//   let res = [];
//   for (var i = 0; i < this.length; ++i) {
//     if (first === i) {
//       if (howD == 0) {
//         res.push(this[i]);
//       } else {
//         i += howD - 1;
//       }
//       for (let j = 0; j < rest.length; j++) {
//         res.push(rest[j]);
//       }
//     } else {
//       res.push(this[i]);
//     }
//   }
//   return res;
// };

// console.log(arr.customSplice(2, 1, 4, 8, 8));

// Constructor

// 1.

// function Animals(name, speed, limitAge) {
//   this.name = name;
//   this.speed = speed;
//   this.limitAge = limitAge;
// }

// Animals.prototype.info = function () {
//   return `${this.name}ning tezligi ${this.speed} km/s ga yetadi va ular ${this.limitAge} yilgacha umr ko'radi`;
// };

// let an = new Animals("Qoplon", 120, 15);

// console.log(an, an.info());

// 2.

// function Student(name, course, years, university) {
//   this.name = name;
//   this.course = course;
//   this.years = years;
//   this.university = university;
// }

// Student.prototype.leftYears = function () {
//   return this.years - this.course == 0
//     ? "Shu yil tugatadi"
//     : this.years - this.course < 0
//     ? "U allaqachon tugatgan"
//     : this.years - this.course + " yil qoldi";
// };

// let st = new Student("Abdulla", 3, 4, "TDTU");

// console.log(st, st.leftYears());

// 3.

// function Person(name, age, currentYear) {
//   this.name = name;
//   this.age = age;
//   this.currentYear = currentYear;
// }

// Person.prototype.getBirthYear = function () {
//   return `${this.name} ${this.currentYear - this.age}-yilda tug'ilgan`;
// };

// let per = new Person("Abdulla", 25, 2024);

// 4.

// function Employee(name, salary, workName) {
//   this.name = name;
//   this.salary = salary;
//   this.workName = workName;
// }

// Employee.prototype.increaseSalary = function (procent) {
//   return (this.salary * (100 + procent)) / 100;
// };

// let em = new Employee("Abdulla", 2500, "Enginier");

// console.log(em, em.increaseSalary(10));

// 5.

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.getArea = function () {
//   return `To'rtburchakning yuzi ${this.width * this.height} ga teng`;
// };

// Rectangle.prototype.getPerimetr = function () {
//   return `To'rtburchakning perimetri ${2 * (this.width + this.height)} ga teng`;
// };

// let rec = new Rectangle(5, 8);

// console.log(rec, rec.getArea(), rec.getPerimetr());