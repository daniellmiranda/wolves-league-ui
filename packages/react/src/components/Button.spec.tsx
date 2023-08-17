import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Button } from '../components/Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  test('should render the component', () => {
    const { getByText } = render(<Button variant="secondary">Test Text</Button>);
    expect(getByText('Test Text')).toBeInTheDocument();
  });

  test('should fire the click event', () => {
    const handleClick = vi.fn();

    const { getByText } = render(
      <Button variant="primary" onClick={handleClick}>
        Test Text
      </Button>,
    );
    fireEvent.click(getByText('Test Text'));

    expect(handleClick).toHaveBeenCalledOnce();
  });
});
