import { render } from '@testing-library/react';
import CarListPage from '../src/app/carlist/page';

describe('CarListPage', () => {
  it('renders without crashing', () => {
    render(<CarListPage />);
  });

  it('renders the available cars', () => {
    const { getByText } = render(<CarListPage />);
    const availableCarHeading = getByText('Available Car');
    expect(availableCarHeading).toBeInTheDocument();
  });

  // Add more test cases as needed
});
