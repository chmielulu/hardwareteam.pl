export default (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset - 160;

  window.scrollTo({ top: y, behavior: "smooth" });
};
