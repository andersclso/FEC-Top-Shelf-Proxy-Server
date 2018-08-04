const path = require("path");

module.exports = {
  entry: {
    vendor: ['styled-components'],
    app1: 'http://localhost:3000/bundle.js',
    app2: 'http://localhost:3001/bundle.js',
    app3: 'http://localhost:9001/bundle.js',
    app4: 'http://localhost:3005/bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
  ],
  output: {
    path: path.resolve(__dirname, "./client"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ["react", "env"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
