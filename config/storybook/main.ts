import * as path from 'path';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,global-require
          implementation: require('sass')
        }
      }
    }
  ],
  core: {},
  docs: {
    autodocs: true
  },
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    }
  },
  staticDirs: ['../../public'],
  stories: ['../../src/**/*.stories.mdx', '../../src/**/*.stories.@(ts|tsx)'],
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~/*': path.resolve(__dirname, './src'),
        public: path.resolve(__dirname, '../../public')
      };
    }
    return config;
  }
};
export default config;
