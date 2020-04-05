function isNumber(inp) {
  for (let i = 0; i < inp.length; i++) {
  if (!(inp[i] >= '0' && inp[i] <= '9')) {
	   return false;
  }}
  return true;
}

function sumInput() {
  let result = 0;
  let end_of_input = false;
  let arr = [];
  while (!end_of_input) {
    let next = prompt("Введите очередное число");
    arr.push(next);
    if ((next == "") || (next == null) || (!(isNumber(next)))) {
	  end_of_input = true;
    }  
  }
  for (let item of arr) {
    result += +item;
  }
  alert(`Сумма введённых чисел составляет:${result}`);
  return result;
}

sumInput();