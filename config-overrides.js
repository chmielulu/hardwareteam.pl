const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components/",
    "@templates": "src/templates/",
    "@themes": "src/themes/",
    "@views": "src/views/",
    "@hooks": "src/hooks/",
    "@constants": "src/constants/",
    "@assets": "src/assets/",
  })(config);

  return config;
};
