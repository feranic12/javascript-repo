function getSecondsToTomorrow() {
  now = new Date();
  tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return (tomorrow.getTime() - now.getTime())/1000;
}
alert (`До завтра остается ${getSecondsToTomorrow()} секунд`);