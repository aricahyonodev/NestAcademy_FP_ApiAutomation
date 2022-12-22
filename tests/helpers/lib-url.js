export const genParamsByObject = (obj) => {
  let temp = "";
  for (const property in obj) {
    temp += `${property}=${obj[property]}&`;
  }

  // Remove value = & in last string
  return temp.slice(0, -1);
};
