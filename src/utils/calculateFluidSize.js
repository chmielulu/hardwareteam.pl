export default ({ min, max, minView = 361, maxView = 1024, width } = {}) => {
  return min + (max - min) * ((width - minView) / (maxView - minView));
};
