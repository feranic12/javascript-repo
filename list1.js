let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  item = list;
  if (item)
  {
	alert(item.value);
    printList(item.next);
  }
  else return;
} 

printList(list);