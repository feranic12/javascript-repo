function sumSalaries(salaries) {
  let salariesArray = Object.values(salaries);
  let result = 0;
  for (let salary of salarieArray) {
    result += salary;
  }
  return result;
}

function count(obj) {
  let arr = Object.entries(obj);
  let result = 0;
  for (let item of arr) {
	if (!(item[0][0] == "[")) result++;
	}
  return result;	
}