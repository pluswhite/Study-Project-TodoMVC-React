import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Demo, { IDemoProps } from '../demo';

const defaultProps: IDemoProps = {
  field: 'demo',
  className: 'demo',
  children: <>Demo</>,
};

describe('Demo component test', () => {
  it('should render the default Demo correctly', () => {
    const { getByTestId, getByText } = render(<Demo data-testid="test-demo" {...defaultProps} />);
    const elm = getByTestId('test-demo');

    expect(elm).toBeInTheDocument();
    expect(elm).toHaveClass('demo');
  });
});
