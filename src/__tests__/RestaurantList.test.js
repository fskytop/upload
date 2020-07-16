import React from 'react';
import { shallow } from 'enzyme';
import RestaurantList from '../RestaurantList';

const restaurants = [
  { title: 'R1', name: 'R1', tags: 'R1', description: 'batman', priceRange: '$' },
  { title: 'R2', name: 'R2', tags: 'R1', description: 'wonder woman', priceRange: '$$' },
  { title: 'R3', name: 'R3', tags: 'R1', description: 'superman', priceRange: '$$$' },
  { title: 'R4', name: 'R4', tags: 'R1', description: 'aquaman', priceRange: '$$$' },
].map((r, i) => ({ ...r, id: `${i}`, imageSrc: '', imageDescription: '' }));

describe('RestaurantList', () => {
  it('shows all restaurants if no filters are set', () => {
    const restaurantList = shallow(
      <RestaurantList
        restaurants={restaurants}
        priceRangeFilter={{}}
        nameFilter=""
      />,
    );
    expect(restaurantList.find('RestaurantCard')).toHaveLength(4);
  });

  it('can filter by price', () => {
    const restaurantList = shallow(
      <RestaurantList
        restaurants={restaurants}
        priceRangeFilter={{ $: true }}
        nameFilter=""
      />,
    );
    expect(
      restaurantList.find('RestaurantCard').prop('restaurant').name,
    ).toEqual('R1');
  });

  it('can show multiple price ranges', () => {
    const restaurantList = shallow(
      <RestaurantList
        restaurants={restaurants}
        priceRangeFilter={{ $: true, $$: true }}
        nameFilter=""
      />,
    );
    const restaurantCards = restaurantList.find('RestaurantCard');
    expect(restaurantCards).toHaveLength(2);
    expect(restaurantCards.at(0).prop('restaurant').name).toEqual('R1');
    expect(restaurantCards.at(1).prop('restaurant').name).toEqual('R2');
  });

  it('can filter by restaurant name', () => {
    const restaurantList = shallow(
      <RestaurantList
        restaurants={restaurants}
        priceRangeFilter={{}}
        nameFilter="R2"
      />,
    );
    expect(
      restaurantList.find('RestaurantCard').prop('restaurant').name,
    ).toEqual('R2');
  });
});
