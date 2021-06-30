export function numberToReal(value: number) {
  var result = value.toFixed(2).split('.');
  result[0] = "R$ " + result[0].split(/(?=(?:...)*$)/).join('.');
  return result.join(',');
}