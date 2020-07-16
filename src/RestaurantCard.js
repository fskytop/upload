import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Actions from './Actions';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Card = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 430px;
  margin: 0 5px;
`;

const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  margin: 0;
`;

const PriceRange = styled.span`
  font-size: 20px;
`;

const Img = styled.img`
  width: 100%;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 20px;
`;

const RestaurantCard = ({ restaurant }) => (
  <Card>
    <StyledLink>
      <CardTitleRow>
        <CardTitle>{restaurant.title}</CardTitle>
        <PriceRange></PriceRange>
      </CardTitleRow>
      <CardTitleRow>
        <Actions sourceUrl={restaurant.imageSrc}/>
      </CardTitleRow>
      <Img src={restaurant.imageSrc} alt={restaurant.imageDescription} />
      <Description>{restaurant.tags}</Description>
    </StyledLink>
  </Card>
);

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageDescription: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RestaurantCard;
