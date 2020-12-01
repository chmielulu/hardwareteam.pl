export default (min, max, minView = 361, maxView = 1024) => {
  const newValue = (value) => (typeof min === "number" ? `${value}px` : value);

  return `calc(${newValue(
    min
  )} + (${max} - ${min}) * ((100vw - ${minView}px) / (${maxView} - ${minView})))`;
};
