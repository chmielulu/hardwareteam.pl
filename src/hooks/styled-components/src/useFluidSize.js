export default (min, max, minView, maxView) =>
  `calc(${min}px + (${max} - ${min}) * ((100vw - ${minView}px) / (${maxView} - ${minView})))`;
