//первая задача
let date = new Date(2012, 1, 20,3,12);
alert(date);

//вторая задача
function getWeekDay(date) {
  let dayOfWeek = date.getDay();
  let dayOfWeekRus;
  switch (dayOfWeek) {
	  case 0: {dayOfWeekRus = "ВС";break;}
	  case 1: {dayOfWeekRus = "ПН";break;}
	  case 2: {dayOfWeekRus = "ВТ";break;}
	  case 3: {dayOfWeekRus = "СР";break;}
	  case 4: {dayOfWeekRus = "ЧТ";break;}
	  case 5: {dayOfWeekRus = "ПТ";break;}
	  case 6: {dayOfWeekRus = "СБ";break;}
  }
  return dayOfWeekRus;
}

//третья задача
function getLocalDay(date) {
  let day = date.getDay(), result;
  if ((day >= 1)&&(day <= 6)) result = day;
  else if (day == 0) result = 7;
  return result;
}
