import { describe, expect, test } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Tooltip', () => {
  test('should render the component', async () => {
    const { findAllByText, getByText } = render(
      <Tooltip content="Tooltip content">
        <Button>Button trigger</Button>
      </Tooltip>,
    );

    fireEvent.mouseOver(getByText('Button trigger'));

    const tooltip = await findAllByText('Tooltip content');

    expect(tooltip[0]).toBeInTheDocument();
  });
});
