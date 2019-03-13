// 比较下标为1和2的数据，将最大的移到后面，再用第3位与前面的数据进行比较，最大的放在后面。同理依次比较到最后。

const bubble_sort = arr => {
  let p = [...arr];
  for (let i = 1; i < p.length; i++) {
    for (let j = 0; j < i; j++) {
      if (p[j] > p[i]) {
        [p[j], p[i]] = [p[i], p[j]];
      }
    }
  }

  return p;
}

let arr = [9, 3, 1, 2, 9, 4, 2, 0, -1, -3, 2]
console.log(bubble_sort(arr));