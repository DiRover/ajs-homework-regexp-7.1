/* eslint-disable no-useless-escape */
/* eslint-disable class-methods-use-this */
class Validator { // создаём класс
  validateUsername(name) {
    const value = /^[^0-9-_а-яА-ЯЁ][0-9a-zA-Z-_]+[^0-9-_а-яА-ЯЁ]$/.test(name); // проверяем на отсутствие в начале и конце (старый вариаент ^[^(0-9-_)].+[^(0-9-_)]$)
    if (value) { // имени символов "-", "_" и цифр
      if (/\d{4}/.test(name)) { // проверяем на недопустимые символы (страый вариант \d{4}|&|#|\(|\)|[а-яА-ЯЁ]|`|\$|\?|\!|\@)
        return 'Name is invalid'; // 4 цифры подряд
      }
      return 'Ok';
    }
    return 'Name is invalid'; // имя начинается не с тех символов
  }
}
export default Validator;
