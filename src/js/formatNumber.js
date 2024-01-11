// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Функция приводит номер телефона к правильному формату
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
export default function formatNumber(phone) {
  let editedNumber;

  editedNumber = phone.trim(' ', ''); // удалим все пробелы

  // преобразуем цифры без '+' в начале строки в '+' либо '+7'
  editedNumber = editedNumber.replace(/(^00)/, '+');
  editedNumber = editedNumber.replace(/(^8)|(^7)/, '+7');
  editedNumber = editedNumber.replace(/(^\d)/, '+7$1');

  // удалим любые символы кроме цифр и плюса в начале строки
  editedNumber = editedNumber.replace(/(?!^\+)([^\d])/g, '');

  return editedNumber;
}
