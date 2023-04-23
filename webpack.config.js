const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {
  // resolve: {
  //   fallback: {
  //     util: require.resolve("util/"),
  //     http: require.resolve("stream-http"),
  //     https: require.resolve("https-browserify"),
  //   },
  // },
  node: { assert: true, stream: true, zlib: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.https = "https-browserify";
    config.resolve.alias.http = "http-browserify";
    return config;
  },
  // resolve: {
  //   fallback: {
  //     http: require.resolve("stream-http"),
  //   },
  // },
};
