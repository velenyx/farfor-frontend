import { render } from '@testing-library/react';

import { Portal } from './Portal';

describe('Portal', () => {
  it('renders children in provided element', () => {
    const div = document.createElement('div');
    render(
      <Portal element={div}>
        <p>Test</p>
      </Portal>
    );

    expect(div.textContent).toBe('Test');
  });

  it('renders children in document.body by default', () => {
    render(
      <Portal>
        <p>Test</p>
      </Portal>
    );

    expect(document.body).toHaveTextContent('Test');
  });

  it('does not render children when no element provided', () => {
    const { queryByText } = render(<Portal />);

    expect(queryByText('Test')).not.toBeInTheDocument();
  });
});
