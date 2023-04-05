import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.s?css$/,
  //use only postcss-loader to process css
  use: [
		{ loader: "style-loader" },
		{ loader: "css-loader" },
		{ loader: "postcss-loader" },
	],
  // use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
