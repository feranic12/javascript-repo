//задача 1
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b) {
  for (let item of arr) {
	if ((item>=3) && (item<=6)) return true;
	else return false;
  }
}

alert (arr.filter(inBetween(3,6)));

