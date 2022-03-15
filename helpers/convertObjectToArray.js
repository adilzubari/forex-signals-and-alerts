const convertObjectToArray = (obj) => {
  // check if it's an object or an array
  const type = typeof obj;
  if (type != "object") return obj;

  // if its an object, convert to array
  const arr = [];
  Object.keys(obj).forEach((key) => (arr[key] = obj[key]));

  return arr;
};

export default convertObjectToArray;
