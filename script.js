/* Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает отсортированный массив, содержащий те же строки, упорядоченные от самой короткой к самой длинной.

Например, если в качестве аргумента был передан следующий массив:

["Telescopes", "Glasses", "Eyes", "Monocles"]
Ваша функция вернет следующий массив:

["Eyes", "Glasses", "Monocles", "Telescopes"]
Все строки в массиве, переданном в вашу функцию, будут разной длины, поэтому вам не придется решать, как упорядочить несколько строк одинаковой длины. */

function sortByLength (array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest
    return array.sort((a, b) => a.length -b.length)
}
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles", 'dfgdfgdgdgdgdgdfgd', 'fg']));
