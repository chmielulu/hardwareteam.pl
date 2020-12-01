export default (readTime) => {
  if (readTime === 1) {
    return "minuta";
  }

  if (readTime >= 2 && readTime <= 4) {
    return "minuty";
  }

  return "minut";
};
