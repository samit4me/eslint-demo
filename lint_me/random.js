export function randomInt(min = 1, max = 2000) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randomStr(min = 1, max = 7) {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const chars = `${alpha}${alpha.toLowerCase()}`;
  const randomChar = () => chars.charAt(Math.floor(Math.random() * chars.length));
  
  
  return Array
    .apply(this, { length: max - min })
    .reduce(str => `${str}${randomChar()}`, '');
}
