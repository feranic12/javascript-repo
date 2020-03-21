function isEmpty(obj) {
	for (let property in obj) {
		return false;
	}
	return true;
}
let schedule = {};
schedule.school = "1";
alert (isEmpty(schedule));

let salaries = {

}
let sum;
if (isEmpty(salaries)) { sum = 0;}
else {sum = salaries.John + salaries.Ann + salaries.Pete;}
alert(sum);
	