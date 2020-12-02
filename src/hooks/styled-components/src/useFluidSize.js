export default ({
  min,
  max,
  minView = 361,
  maxView = 1024,
  unit = "px",
} = {}) => {
  return `calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${minView}px) / (${maxView} - ${minView})))`;
};
