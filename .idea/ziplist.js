test1 = ['a', 'b', 'c'];
test2 = [1, 2, 3];

function zipList(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(test1, test2));