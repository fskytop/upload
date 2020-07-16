import React from 'react';
import styled from 'styled-components';
import TextInput from './components/TextInput';

const mediumScreen = `@media (max-width: 830px)`;

class FilterIcon extends React.Component{
  render(){
    return (
      <svg className="octicon octicon-search text-gray-dark"
           viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
        <path fill-rule="evenodd"
              d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
      </svg>
    )
  }
}

const FilterSearchIcon = styled.div.attrs({
  className: 'position-absolute'
})`
  margin-top: 13px;
  left:15px;
`;

const FilterRow = styled.div.attrs({
  className: 'col-lg-9 position-relative mb-3 box-shadow-extra-large'
})`
  display: flex;
  margin-top: 20px;

  ${mediumScreen} {
    flex-direction: column;
  }
`;

const Filters = ({
  name,
  setNameFilter
}) => (
  <FilterRow>
    <FilterSearchIcon>
      <FilterIcon/>
    </FilterSearchIcon>
    <TextInput label="" value={name} onChange={setNameFilter} />
  </FilterRow>
);

export default Filters;
