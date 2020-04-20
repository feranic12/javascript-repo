//числа Фибоначчи
function fib(n) {
  if ((n == 1) || (n == 2)) return 1;
  if (n > 2) 
  {
    let sumprev = 1, sumprevprev = 1;
    for (let i = 3; i<=n ; i++)
	  {
	    sum = sumprevprev + sumprev;
	    sumprevprev = sumprev;
		sumprev = sum;
	  }
	 return sum;
  }
}
alert (fib(1000));