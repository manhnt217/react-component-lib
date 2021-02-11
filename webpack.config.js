const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rules = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    include: [path.resolve(__dirname, "src")],
    loader: "babel-loader",

    options: {
      plugins: ["syntax-dynamic-import", /* "dynamic-import-node" */],
      presets: ["@babel/preset-env", "@babel/preset-react"],
      sourceMap: true,
      inputSourceMap: true,
    }
  },
  {
    test: /\.css$/,

    use: [
      {
        loader: 'style-loader',
        options: {
          esModule: true,
          modules: {
            namedExport: true,
          },
        },
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        },
      },
    ],
  },
  {
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    type: 'asset/resource'
  },
  // Fonts and SVGs
  {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: 'asset/inline',
  },
  // {
  //   exclude: /\.ejs$/,
  //   type: 'javascript/auto'
  // },
];

module.exports = (env) => ({
  entry: [
    './src/main.js',
  ],

  module: {
    rules: [{ oneOf: rules }]
  },

  output: {
    path: path.resolve(__dirname, './target'),
    filename: '[name].[chunkhash].bundle.js',
    library: 'AddonCompLib',
    libraryTarget: 'assign-properties'
  },

  mode: "production",
  // mode: "development",
  // devtool: 'source-map',

  optimization: {
    splitChunks: {
      chunks: "all",
    }
  },
  plugins: env.dev_server ?
      [
          new HtmlWebPackPlugin({
            template: 'test/template.html',
            scriptLoading: 'blocking',
            inject: 'head'
          })
      ]
      :
      [
          new CleanWebpackPlugin()
      ]
  ,
  devServer: {
    static: path.resolve(__dirname, 'test'),
    compress: true,
    port: 8123
  }
})
