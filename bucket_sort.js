/*
 1. 利用的是数组下标。生成一个数组a，长度为待排序数组的最大值，所有元素初始化为0。
 2. 将待排序数组的元素变成数组a 的下标，并将该下标的元素值加1。
 3. 依次取数组a 的值，若该值不为0则依次放入新的数组b 中。
    并将该值减1，若还不为0，再放入数组b 中。减到该值为0为止。
 4. 数组b 为排序好的结果。

 注: 若有负数，可生成两个数组，将负数变为正数，再进行上面的操作。
     排序好后，放负数排序的结果恢复为负数，再取反插入新的数组中，正数排序结果依次插入即可。
*/

const bucket_sort = arr => {
  let [min, max] = [Math.min(...arr), Math.max(...arr)];
  let a = Array.from({length: max + 1}).fill(0);
  let b = null;
  if (min < 0) {
    b = Array.from({length: (-min) + 1}).fill(0);
  }

  arr.forEach(ele => {
    if (ele < 0) {
      b[-ele] += 1;
    } else {
      a[ele] += 1;
    }
  })

  let c = [];
  if (b != null) {
    b.forEach((ele, index) => {
      while (ele--) {
        c.unshift(-index);
      }
    })
  }

  a.forEach((ele, index) => {
    while (ele--) {
      c.push(index)
    }
  })

  return c;
}

let arr = [9, 3, 1, 2, 9, 4, 2, 0, -1, -3, 2]
console.log(bucket_sort(arr))