export default (timestamp) => {
  const date = new Date(timestamp);

  return date.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
