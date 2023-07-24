import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        style={{
          alignItems: 'start',
          color: '#000',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          justifyContent: 'start',
          margin: 10
        }}
      >
        <Story />
      </div>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i
      }
    },
    previewTabs: {
      canvas: {
        title: 'Story'
      }
    },
    viewMode: 'docs',
    viewport: {
      viewports: {
        '360': {
          name: '360',
          styles: {
            height: '780px',
            width: '360px'
          }
        },
        '768': {
          name: '768',
          styles: {
            height: '1664px',
            width: '768px'
          }
        },
        '1024': {
          name: '1024',
          styles: {
            height: '576px',
            width: '1024px'
          }
        },
        '1600+': {
          name: '1600+',
          styles: {
            height: '900px',
            width: '1600px'
          }
        }
      }
    }
  }
};

export default preview;
