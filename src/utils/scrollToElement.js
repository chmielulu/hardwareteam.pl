/* eslint-disable no-unused-vars */
export default (query, e, { yOffset = 0 } = {}) => {
  if (e) {
    e.preventDefault();
  }

  let element;

  if (typeof query === "string") {
    element = document.querySelector(query);
  } else {
    element = query.current;
  }

  const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
