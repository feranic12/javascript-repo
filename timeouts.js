function printNumbers(from, to) {
	let i = from;
	let timerID = setTimeout(function tick() {
	  if (i > to) return;
	  else
	    {
		  alert(i++);
		  setTimeout(tick, 1000);
		}
  })
}
printNumbers(4, 8);