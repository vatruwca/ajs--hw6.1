export default function orderByProps(obj, array) {
  const arr = [];
  for (const key in obj) {
    if (Object.getOwnPropertyDescriptor(obj, key)) {
      arr.push(key);
    }
  }
  const arr1 = array.concat(arr.sort());
  const arr2 = arr1.filter((item, index) => arr1.indexOf(item) === index);
  const result = [];
  for (const key of arr2) {
    result.push({ key, value: obj[key] });
  }
  return result;
}
