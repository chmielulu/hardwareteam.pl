const path = require("path");

const resolve = (file) => path.resolve(__dirname, file);

module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias["@assets"] = resolve("../src/assets");
    config.resolve.alias["@components"] = resolve("../src/components");
    config.resolve.alias["@constants"] = resolve("../src/constants");
    config.resolve.alias["@hooks"] = resolve("../src/hooks");
    config.resolve.alias["@templates"] = resolve("../src/templates");
    config.resolve.alias["@themes"] = resolve("../src/themes");
    config.resolve.alias["@views"] = resolve("../src/views");
    return config;
  },
};
