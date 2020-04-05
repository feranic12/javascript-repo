function unique(arr) {
  let res_arr = [];
  let set = new Set();
  for (let item of arr) {
    set.add(item);
  }
  for (let item of set) {
    res_arr.push(item);
  }
  return res_arr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"]
alert(unique(values));