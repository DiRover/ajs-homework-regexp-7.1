/* eslint-disable class-methods-use-this */
class Validator { // создаём класс
  validateUsername(name) {
    const value = /^[^(0-9-_)].+[^(0-9-_)]$/.test(name); // проверяем на отсутствие в начале и конце
    if (value) { // имени символов "-", "_" и цифр
      if (name.match(/\d\d\d\d/)) { // проверяем отсутствие 4-х цифр подряд
        return 'Name is invalid'; // 4 цифры подряд
      }
      return 'Ok';
    }
    return 'Name is invalid'; // имя начинается не с тех символов
  }
}
export default Validator;
