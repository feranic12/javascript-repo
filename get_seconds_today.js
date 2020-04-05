function getSecondsToday() {
	today_beginning = new Date();
	today_beginning.setHours(0, 0 ,0 ,0);
	today_now = new Date();
	return (today_now - today_beginning)/1000;
}
alert (`За сегодняшний день на данный момент прошло ${getSecondsToday()} секунд.`);