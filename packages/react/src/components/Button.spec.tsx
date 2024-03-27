import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { Button } from '../components/Button';

describe('Button', () => {
  test('should render the component', () => {
    const { getByText } = render(
      <Button variant="secondary">Test Text</Button>,
    );
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
