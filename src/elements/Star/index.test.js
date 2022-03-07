import React from 'react';
import { render } from '@testing-library/react';
import Star from './index';

test('should have props [value, height, widt, spacing]', () => {
  const height = 40,
    width = 40,
    spacing = 4;
  const { container } = render(
    <Star value={3.6} height={height} width={width} spacing={spacing} />
  );

  const starYellow = 'div.stars div.star:not(.placeholder)';

  expect(container.querySelectorAll('div.stars').length).toBeInTheDocument();
  expect(container.querySelectorAll('div.stars').length).toHaveAttribute(
    'style',
    expect.stringContaining(`height: ${height} `)
  );
  expect(container.querySelectorAll(starYellow).length).toBeInTheDocument();
  expect(container.querySelectorAll(starYellow).length).toHaveAttribute(
    'style',
    expect.stringContaining(`width: ${width} `)
  );
  expect(container.querySelectorAll(starYellow).length).toHaveAttribute(
    'style',
    expect.stringContaining(`height: ${height} `)
  );
  expect(container.querySelectorAll(starYellow).length).toHaveAttribute(
    'style',
    expect.stringContaining(`margin-right: ${spacing}px `)
  );
});
