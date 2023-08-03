// первая группа студентов
const studentsGroup1PracticeTime = [
  {
    firstName: "Ivanov",
    practiceTime: 56,
  },
  {
    firstName: "Petrov",
    practiceTime: 120,
  },
  {
    firstName: "Sidorov",
    practiceTime: 148,
  },
  {
    firstName: "Belkin",
    practiceTime: 20,
  },
  {
    firstName: "Avdeev",
    practiceTime: 160,
  },
];

// вторая группа студентов
const studentsGroup2PracticeTime = [
  {
    firstName: "Mankov",
    practiceTime: 87,
  },
  {
    firstName: "Kistin",
    practiceTime: 133,
  },
  {
    firstName: "Kotlyarov",
    practiceTime: 140,
  },
  {
    firstName: "Peskov",
    practiceTime: 10,
  },
];

function findMax() {
  const values = arguments;
  // arguments - переменная доступная внутри каждой функции, которая содержит в себе все аргументы, переданные в функцию. Является псевдомассивом.
  let maxValue = -Infinity;
  // Так как arguments является псевдомассивом, мы не можем применять к нему новые методы массивов такие как forEach или reduce, поэтому будем итерировать по старинке.
  for (let index = 0; index < values.length; index++) {
    if (values[index] > maxValue) maxValue = values[index];
  }
  return maxValue;
}

// Cначала создадим массивы только со значениями времени отработанными студентами.
const group1PracticeTime = studentsGroup1PracticeTime.map(
  (student) => student.practiceTime
);
const group2PracticeTime = studentsGroup2PracticeTime.map(
  (student) => student.practiceTime
);

const maxTimeFromGroup1 = findMax(...group1PracticeTime);

// Это аналогично страшной и неудобной записи:
// findMax(group1PracticeTime[0], group1PracticeTime[1], group1PracticeTime[2], group1PracticeTime[3], group1PracticeTime[4])

console.log("Максимальное время первой группы  " + maxTimeFromGroup1); // 160

const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log("Максимальное время первой группы  " + maxTimeFromGroup2); // 140

// Давайте также найдем максимально отработанное время среди двух групп. Мы можем сделать это передав данные обоих массивов в функцию таким образом:
// findMax(...group1PracticeTime, ...group2PracticeTime);
// А можем объединить два массива в один - это очень частая операция и оператор расширения (spread) очень в этом помогает.

const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
// Для объединения двух массивов нам нужно вытащить их элементы в один общий массив, поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение элементов первого и второго массива. Также мы могли бы добавить в него и другие элементы.

const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log("Максимальное время из обеих группы  " + maxTimeBothGroups); // 160

console.log("----------------------------------------------------------------");

/*  ОПЕРАТОР REST */
console.log('оператор rest');

function findMax(...values) {
  // тут мы принимаем все переданные аргументы и с помощью rest оператора упаковываем их в массив values.
  // На этот раз values уже настоящий массив и мы можем использовать reduce для итерации по нему и нахождения максимального числа.
  return values.reduce((acc, value) => {
    if (value > acc) return value;
    return acc;
  }, -Infinity);
}
// Создадим массивы только со значениями времени отработанными студентами.
const group1PracticeTimeVar2 = studentsGroup1PracticeTime.map(
  (student) => student.practiceTime
);
const group2PracticeTimeVar2 = studentsGroup2PracticeTime.map(
  (student) => student.practiceTime
);

// Вызовем нашу функцию поиска максимума, используя оператор spread.
const maxTimeFromGroup1Var2 = findMax(...group1PracticeTimeVar2);
console.log("Максимальное время первой группы, оператор Rest  " + maxTimeFromGroup1Var2); // 160

const maxTimeFromGroup2Var2 = findMax(...group2PracticeTimeVar2);
console.log("Максимальное время второй группы, оператор Rest  " + maxTimeFromGroup2Var2); // 140


console.log("----------------------------------------------------------------");


