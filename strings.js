function ucFirst(str) {
  if (!(str == ""))return str[0].toUpperCase() + str.substr(1,str.length-1);
  else return "";
}

function checkSpam(str) {
  if (str.toUpperCase().includes("viagra") || (str.toUpperCase().includes("XXX")))
     return true;
  else return false;
 }

function truncate(str, maxlength) {
  if (str <= maxlength) return str;
  else return str.substr(0, maxlength - 1) + "...";
 }
 
function extractCurrencyValue(str) {
  while (!(str[0] >= '0' && str[0] <= '9')) {
    str = str.substring(1, str.length-1);
  }
  return parseInt(str);
}