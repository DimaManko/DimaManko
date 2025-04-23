/* 
Теперь, когда у учителя есть вся необходимая информация, он хочет иметь возможность отправить ученику сообщение с результатами.

Заполните функцию studentMsg, указав в качестве параметров totalScores и studentScore. Функция должна возвращать строку, представляющую собой сообщение для студента.

Если студент прошел курс, строка должна иметь следующий формат:
Замените average-goes-here на среднее значение общего количества баллов. Замените grade-goes-here на оценку ученика.

Советы

Используйте функцию getAverage для получения среднего балла по классу.
Используйте функцию getGrade, чтобы получить оценку ученика.
Для создания сообщения используйте конкатенацию строк (+).
Будьте внимательны к пунктуации и пробелам в сообщении.

Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.*/

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  if (getGrade(score) === "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg(totalScores, studentScore) {
   let average = getAverage(totalScores);
   let grade = getGrade(studentScore);
  return (hasPassingGrade(studentScore) ? `Class average: ${average}. Your grade: ${grade}. You passed the course.` : `Class average: ${average}. Your grade: ${grade}. You failed the course.`);
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));