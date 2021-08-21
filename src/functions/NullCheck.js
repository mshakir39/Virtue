const isNull = (value) => {
  if (
    value === "" ||
    value === "null" ||
    value === "undefined" ||
    value === null ||
    value === undefined ||
    value === 0 ||
    value === -1
  ) {
    return true;
  } else {
    return false;
  }
};
export default isNull;
