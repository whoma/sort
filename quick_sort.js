/*
 1. 待排序数组中，取个中间值，将小于或大于该值的放入不同个的两个数组中。
 2. 在待排序数组中删除该中间值，按到大小拼接两个数组和中间值，然后再调用快排递归两个数组，直到传入的数组长度为1为止。
*/

const quick_sort = arr => {
  if (arr.length < 2) return arr;
  let pointer = Math.floor(arr.length / 2);
  let top = arr[pointer];
  let lefts = [], rights = [];
  arr.splice(pointer, 1);
  arr.forEach(ele => {
    if (top > ele) {
      lefts.push(ele)
    } else {
      rights.push(ele);
    }
  })

  return quick_sort(lefts).concat(top, quick_sort(rights));
}

let arr = [9, 3, 1, 2, 9, 4, 2, 0, -1, -3, 2]
console.log(quick_sort(arr))