const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function filterStrings(arr) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === "string") {
      filteredArray.push(arr[i].trim());
    }
  }
  return filteredArray;
}

function createDreamTeam(members) {
  // сначала проверяем, что функции был передан массив. Если был передан массив, тогда выполняем код в блоке конструкции if
  if (Array.isArray(members)) {
    // отфильтровываем из переданного массива значений только строки и удаляем в них пробелы по краям
    const filteredArray = filterStrings(members);
    // создаем новый массив на основе отфильтрованного массива, из одних только первых букв слов
    const dreamTeamArray = filteredArray.map((item) => item[0].toUpperCase());
    // создаем имя команды путем превращения массива из заглавных букв имен в строку, сортируем буквы по алфавиту
    const dreamTeamName = dreamTeamArray.sort().join("");
    return dreamTeamName;
  }
  // если функции был передано значение, отличное от массива, возвратим false
  return false;
}

module.exports = {
  createDreamTeam,
};
