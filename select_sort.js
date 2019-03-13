// 依次从数组中选择最大的数，放入另一个数组中。

const select_sort = arr => {
  let p = [];
  let pointer = null;
  let max = null;
  while (arr.length) {
    max = arr[0];
    pointer = 0;
    arr.forEach((ele, index) => {
      if (max < ele) {
        pointer = index;
        max = ele;
      }
    })
    p.unshift(max);
    arr.splice(pointer, 1);
  }

  return p;
}

let arr = [9, 3, 1, 2, 9, 4, 2, 0, -1, -3, 2];
console.log(select_sort(arr));