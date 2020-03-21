let n=prompt("Введите N:")
let result="";
for (i=2;i<=n;i++) {
	let simple=true;
    for (j=2;j<i;j++)
	if (i%j==0) {
		simple=false;
		break;
	}
	if (simple) {
		result+=i+',';
	}
}
result=result.substring(0,result.length-1);
alert(result);