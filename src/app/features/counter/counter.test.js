import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it(`Renders default 0 count`, () => {
    render(<Counter />);

    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument;
  });
});
