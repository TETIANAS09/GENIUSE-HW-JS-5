//--1--
//1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
//бал і кількість пропущених занять
//2) написати метод який буде виводити цю інформацію
//3) написати три варіанти студентів
//4) прикріпити знначення за допомогою call apply bind
///result//
/*
const student = {
  name: "Ivan",
  speciality: "Математика",
  averageMark: 5.7,
  absencesCount: 0,
  showStudentInfo: function () {
    console.log(`name: ${this.name},`);
    console.log(`speciality: ${this.speciality}`);
    console.log(` averageMark: ${this.averageMark}`);
    console.log(`absencesCount: ${this.absencesCount}`);
  },
};
student2 = {
  name: "Olga",
  speciality: "Історія",
  averageMark: 4.8,
  absencesCount: 2,
  showStudentInfo: function () {
    console.log(`name: ${this.name},`);
    console.log(`speciality: ${this.speciality}`);
    console.log(` averageMark: ${this.averageMark}`);
    console.log(`absencesCount: ${this.absencesCount}`);
  },
};
student3 = {
  name: "Anna",
  speciality: "Біологія",
  averageMark: 8.2,
  absencesCount: 4,
  showStudentInfo: function () {
    console.log(`name: ${this.name},`);
    console.log(`speciality: ${this.speciality}`);
    console.log(` averageMark: ${this.averageMark}`);
    console.log(`absencesCount: ${this.absencesCount}`);
  },
};
student.showStudentInfo.bind(student)();
student.showStudentInfo.call(student);
student.showStudentInfo.apply(student);
student.showStudentInfo.bind(student2)();
student.showStudentInfo.call(student2);
student.showStudentInfo.apply(student2);
student.showStudentInfo.bind(student3)();
student.showStudentInfo.call(student3);
student.showStudentInfo.apply(student3);

*/
//--2--
//Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення що це таке
//при натисканні на кнопку css - має видати коротке визначення що це таке

///result///
/*
const htmlButton = document.querySelector(" #htmlButton");
const cssButton = document.querySelector("#cssButton");

function defineHtml() {
  console.log(
    "«HTML розшифровується як HyperText Markup Language. Це стандартна мова розмітки для створення веб-сторінок»."
  );
}

function defineCss() {
  console.log(
    "«CSS означає каскадні таблиці стилів. Це мова таблиць стилів, яка використовується для опису вигляду та форматування документа, написаного в HTML»."
  );
}

htmlButton.addEventListener("click", defineHtml);
cssButton.addEventListener("click", defineCss);

*/

//--3--
//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість
//перевірити на варіантах:
//1) banana 30, 4,5
//2) cherry 58, 1,3
//3) orange 89. 3,4

// result//

/*
function shop(productName, quantity, pricePerKg) {
  return {
    productName,
    totalCost: quantity * pricePerKg,
  };
}

const banana = shop("banana", 30, 4.5);
console.log(
  `Назва: ${banana.productName},Загальна вартість: ${banana.totalCost}`
);

const cherry = shop("cherry", 58, 1.3);
console.log(
  `Назва: ${cherry.productName},Загальна вартість: ${cherry.totalCost}`
);

const orange = shop("orange", 89, 3.4);
console.log(
  `Назва: ${orange.productName},Загальна вартість: ${orange.totalCost}`
);

*/
