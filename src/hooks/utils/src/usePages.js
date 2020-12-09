export default (length) => {
  let pages = length / 30;

  if (pages % 2 !== 0) {
    pages = Math.floor(pages) + 1;
  }

  return pages;
};
