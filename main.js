/* Необходимо реализовать функцию, в которую будет передаваться произвольная строка.

Функции необходимо вернуть самый часто повторяемый символ в строке (регистронезависимо).

Если несколько символов набрали одинаковое количество упоминаний, нужно вернуть любой из них.
 */


function getFrequentlyRepeatedSymbol(str) {
  // Ваш код здесь
  const charCounts = {};
  for (const char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  let mostChar = '';
  let maxCount = 0;
  for (const char in charCounts) {
  if (charCounts[char] > maxCount) {
    mostChar = char;
    maxCount = charCounts[char];
  }
}
return mostChar;
}
console.log(getFrequentlyRepeatedSymbol("кодили-кодили, да ненакодили")); // и
console.log(
  getFrequentlyRepeatedSymbol(
    "Карл у Клары украл кораллы, Клара у Карла украла кларнет"
  )
); // а