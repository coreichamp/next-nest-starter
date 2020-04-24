const path = require('path');

module.exports = {
  stories: [
    '../ui/layout/**/*.stories.tsx',
    '../ui/components/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    'storybook-dark-mode/register',
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~/theme': path.resolve(__dirname, '../ui/theme'),
    };
    config.resolve.modules.push(path.resolve(__dirname, '../ui'));
    config.module.rules.push(
      {
        test: /\.(ts)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    );
    config.resolve.extensions.push('.ts', '.tsx');

    // Disable ProgressPlugin which logs verbose webpack build progress. Warnings and Errors are still logged.
    config.plugins = config.plugins.filter(({ constructor }) => constructor.name !== "ProgressPlugin")

    return config;
  },
};