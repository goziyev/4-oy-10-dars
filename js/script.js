
// 1-masala
// let arr = [1,2,3];
// let arr1 = [4,5,6];
// let arr2 = [7,8,9];
const combine = (arr, arr1, arr2) => {
  let res = arr2.concat(arr1, arr);
  return res;
};
// console.log(combine(arr,arr1,arr2));

// 2-masala
// let arr = [1, 2, -4, 4, 10, 5, -36, 24, -65, 70];
function square(arr) {
  let res = arr.findIndex((value, index) => {
    if (value % 2 == 0 && value % 5 == 0) {
      return index;
    }
  });
  return res ** 2;
}

// console.log(square(arr));

// 3-masala
const thirdIssue = (arr) => {
  let res = arr.find((value) => {
    return value < 0;
  });
  return res;
};
// console.log(thirdIssue(arr));

// 4-masala
let arr = [1, 123, 4, 10, 21, 5, -36, 81, 24, -65, 51];
const fourth = function (arr) {
  let count = 0;
  let res = arr.find((value) => {
    if (value % 2 == 1 && value % 3 == 0) {
      count++;
    }
  });
  return count;
};

// console.log(fourth(arr));

// 5-masala
function fiveth(arr) {
  let res = arr.includes(4);
  return res;
}
// console.log(fiveth(arr));

// 6-masala
const last_matter = (arr) => {
  let res = arr.sort((a, b) => {
    return b - a;
  });
  return res;
};
// console.log(last_matter(arr));
