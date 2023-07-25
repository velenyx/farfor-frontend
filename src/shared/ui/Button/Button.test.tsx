import { fireEvent, render, screen } from '@testing-library/react';

import { Button, BUTTON_TEST_IDS } from './Button';

describe('Button', () => {
  const mockOnClick = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders button with children', () => {
    render(<Button onClick={mockOnClick}>Test Button</Button>);
    expect(screen.getByTestId(BUTTON_TEST_IDS.CHILDREN)).toHaveTextContent('Test Button');
  });
  it('handles click event', () => {
    render(<Button onClick={mockOnClick}>Test Button</Button>);
    fireEvent.click(screen.getByTestId(BUTTON_TEST_IDS.CONTAINER));
    expect(mockOnClick).toHaveBeenCalled();
  });
  it('renders loading state', () => {
    render(
      <Button loading onClick={mockOnClick}>
        Test Button
      </Button>
    );
    expect(screen.getByTestId(BUTTON_TEST_IDS.LOADER)).toBeInTheDocument();
    expect(screen.queryByTestId(BUTTON_TEST_IDS.CHILDREN)).not.toBeInTheDocument();
  });
  it('renders startIcon if provided', () => {
    const TestIcon = () => <div>Test Icon</div>;
    render(
      <Button startIcon={<TestIcon />} onClick={mockOnClick}>
        Test Button
      </Button>
    );
    expect(screen.getByTestId(BUTTON_TEST_IDS.START_ICON)).toBeInTheDocument();
  });
  it('renders as link if href is provided', () => {
    render(
      <Button href='https://example.com' onClick={mockOnClick}>
        Test Button
      </Button>
    );
    expect(screen.getByTestId(BUTTON_TEST_IDS.CONTAINER)).toHaveAttribute(
      'href',
      'https://example.com'
    );
  });
  it('renders with custom className', () => {
    render(
      <Button className='test-class' onClick={mockOnClick}>
        Test Button
      </Button>
    );
    expect(screen.getByTestId(BUTTON_TEST_IDS.CONTAINER)).toHaveClass('test-class');
  });
  it('renders with correct variant', () => {
    render(
      <Button variant='backgroundInverted' onClick={mockOnClick}>
        Test Button
      </Button>
    );
    expect(screen.getByTestId(BUTTON_TEST_IDS.CONTAINER)).toHaveClass('backgroundInverted');
  });
});
