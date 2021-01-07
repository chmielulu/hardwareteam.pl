/* eslint-disable no-param-reassign */
const path = require("path");
const { alias } = require("react-app-rewire-alias");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = function override(config) {
  alias({
    "@components": "src/components/",
    "@templates": "src/templates/",
    "@themes": "src/themes/",
    "@views": "src/views/",
    "@hooks": "src/hooks/",
    "@constants": "src/constants/",
    "@assets": "src/assets/",
    "@routes": "src/routes/",
    "@custom": "src/custom/",
    "@utils": "src/utils/",
    "@database": "src/database/",
    "@actions": "src/actions/",
    "@reducers": "src/reducers/",
    "@store": "src/store/",
    "@config": "src/config/",
  })(config);

  config.entry = "./src/index.js";

  config.output = {
    path: path.resolve(__dirname, "build"),
    filename: "index_bundle.js",
    publicPath: "/",
  };

  config.devServer = {
    historyApiFallback: true,
  };

  config.plugins.push(new HtmlWebpackPlugin({ template: "public/index.html" }));
  config.plugins.push(
    new CopyPlugin({ patterns: [path.resolve(__dirname, "_redirects")] })
  );

  return config;
};
