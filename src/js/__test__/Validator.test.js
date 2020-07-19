import Validator from '../Validator';

const user = new Validator();
test('check name 1', () => {
  const name = 'Di3333ma';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 2', () => {
  const name = 'Di333ma';
  const expected = 'Ok';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 3', () => {
  const name = '-Di333ma';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 4', () => {
  const name = 'Di3333ma-';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 5', () => {
  const name = 'Dima';
  const expected = 'Ok';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 6', () => {
  const name = '_Di33ma';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 7', () => {
  const name = 'Di33ma_';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 8', () => {
  const name = '8Di33ma';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 9', () => {
  const name = 'Di33ma9';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 10', () => {
  const name = '+Di333ma';
  const expected = 'Ok';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 11', () => {
  const name = 'Di333ma+';
  const expected = 'Ok';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 12', () => {
  const name = 'M&M`s';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 13', () => {
  const name = 'M#M`s';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 14', () => {
  const name = 'M(M`s';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 15', () => {
  const name = 'M)M`s';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 16', () => {
  const name = 'Ё';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 17', () => {
  const name = 'M`';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 18', () => {
  const name = '$';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 19', () => {
  const name = '?';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 20', () => {
  const name = '!';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});

test('check name 21', () => {
  const name = '@';
  const expected = 'Name is invalid';
  const received = user.validateUsername(name);
  expect(received).toBe(expected);
});
