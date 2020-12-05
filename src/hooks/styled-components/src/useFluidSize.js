export default ({
  min,
  max,
  minView = 361,
  maxView = 1024,
  unit = "px",
} = {}) => {
  return `calc(${min}${unit} + (${unit === "rem" ? max * 10 : max} - ${
    unit === "rem" ? min * 10 : min
  }) * ((100vw - ${minView}px) / (${maxView} - ${minView})))`;
};
