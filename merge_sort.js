/* (先分割再合并)

 1. 将待排序数组分割为左右两个数组，记录中间下标和左右下标。
 2. 当左下标小于右下标时，循环第一步。
 3. 按照分割顺序的左右位置进行比对合并。
*/

const merge_sort = arr => {
  let p = [...arr];
  merge_split(p, 0, p.length - 1);
  return p;
}

const merge_split = (arr, left, right) => {
  if (left < right) {
    let mid = Math.floor((right + left) / 2);
    merge_split(arr, left, mid);
    merge_split(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

const merge = (arr, left, mid, right) => {
  let temp = [];
  let i = left, j = mid + 1;
  while (i <= mid && j <= right) {
    if (arr[i] > arr[j]) {
      temp.push(arr[j++]);
    } else {
      temp.push(arr[i++]);
    }
  }

  while (i <= mid) temp.push(arr[i++]);
  while (j <= right) temp.push(arr[j++]);

  while (left <= right) {
    arr[left++] = temp.shift();
  }

}

let arr = [9, 3, 1, 2, 9, 4, 2, 0, -1, -3, 2]
console.log(merge_sort(arr))