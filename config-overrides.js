const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components/",
    "@templates": "src/templates/",
    "@themes": "src/themes/",
    "@views": "src/views/",
  })(config);

  return config;
};
