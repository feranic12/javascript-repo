function Accumulator( startingValue ) {
  this.value = startingValue;
  this.read = function() {
     let delta = +prompt("Введите следующее слагаемое:");
	 this.value += delta;
  }
}
  
let accumulator = new Accumulator(20);
 
accumulator.read();
accumulator.read();
 
alert(accumulator.value);
 