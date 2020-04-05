function topSalary(salaries) {
  let arr = Object.entries(salaries);
  if (arr.length == 0) return null;
  let max_salary = 0;
  for (let [name, salary] of arr) {
    if (salary > max_salary) {
		best_name = name;
		max_salary = salary;
	}
  }
  return best_name;
}