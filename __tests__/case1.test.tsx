import { render } from '@testing-library/react';
import RecommendCard from '@/components/recommendCard';

describe('RecommendCard', () => {
  it('renders with provided props', () => {
    // Define mock data for the props
    const car = {
      name: 'Honda Civic',
      imgSrc: '/img/recommendCivic.jpg',
      zeroToHundred: 8.5,
      topSpeed: 137,
      engineLitre: 1.5,
    };

    // Render the RecommendCard component with mock data
    const { getByText, getByAltText } = render(
      <RecommendCard
        name={car.name}
        imgSrc={car.imgSrc}
        zeroToHundred={car.zeroToHundred}
        topSpeed={car.topSpeed}
        engineLitre={car.engineLitre}
      />
    );

    // Assert that the name of the car is rendered
    expect(getByText(car.name)).toBeInTheDocument();

    // Assert that the image alt text is rendered
    expect(getByAltText('LandingPageImage')).toBeInTheDocument();

    // Assert that the zeroToHundred speed is rendered
    expect(getByText(`${car.zeroToHundred} s`)).toBeInTheDocument();

    // Assert that the topSpeed is rendered using a regular expression
    expect(getByText(new RegExp(`${car.topSpeed} mph`))).toBeInTheDocument();

    // Assert that the engineLitre is rendered
    expect(getByText(`${car.engineLitre}L`)).toBeInTheDocument();
  });
});
