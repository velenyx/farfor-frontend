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
        postCss: true
      }
    }
  ],
  core: {},
  docs: {
    autodocs: true
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['./public'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~/*': path.resolve(__dirname, './src')
      };
    }
    return config;
  }
};
export default config;
