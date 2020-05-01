for (let row of table.rows) {
   tr = row;
   for (let cell of tr.cells) {
     td = cell;
	 if (tr.rowIndex == td.cellIndex) td.style.background = 'red';
   }
}