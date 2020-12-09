export default (query, e, { yOffset = 0 } = {}) => {
  if (e) {
    e.preventDefault();
  }

  const element = document.querySelector(query);
  const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
