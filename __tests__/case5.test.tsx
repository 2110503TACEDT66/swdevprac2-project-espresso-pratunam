import { render, fireEvent } from '@testing-library/react';
import TopMenu from '../src/components/topmenu';

describe('TopMenu', () => {
  it('toggles the menu when the button is clicked', () => {
    const { getByLabelText } = render(<TopMenu />);
    const toggleButton = getByLabelText('Toggle Menu');

    // Initially, the menu should be closed
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Click the button to open the menu
    fireEvent.click(toggleButton);

    // After clicking, the menu should be open
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    // Click the button again to close the menu
    fireEvent.click(toggleButton);

    // After clicking again, the menu should be closed
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  // Add more test cases as needed...
});
