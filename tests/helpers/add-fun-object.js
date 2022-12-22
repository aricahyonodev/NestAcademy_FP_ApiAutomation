export const getObjKey = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
}
