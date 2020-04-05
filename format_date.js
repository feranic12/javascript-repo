  
function formatDate(date) {
  now = new Date();
  delta = now - date;
  if (delta < 1000) return "прямо сейчас";
  else if ((delta >= 1000) && (delta < 1000*60)) {
    let seconds = Math.round(delta/1000);
	return `${seconds} сек. назад`;
  }
  else if ((delta >= 1000*60) && (delta <= 1000*60*60)) {
	let minutes = Math.round(delta/(1000*60));
    return `${minutes} мин. назад`;
  }
  else {
    shortYear = date.getFullYear().toString().substr(2,2);
	month = (date.getMonth() + 1).toString();
	if (month.length == 1) month = "0" + month;
	day = date.getDate().toString();
	if (day.length == 1) day = "0" + day;
	hours = date.getHours().toString();
	if (hours.length == 1) hours = "0" + hours;
	minutes = date.getMinutes().toString();
	if (minutes.length == 1) minutes = "0" + minutes;
	return day + "." + month + "." + shortYear + " " + hours + ":" + minutes;
  }
}

date = new Date(2020, 3, 5, 17, 49);
alert (formatDate(date));