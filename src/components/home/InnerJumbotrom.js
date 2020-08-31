import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import tw from 'tailwind.macro';
import SearchForm from './SearchForm';
import SignButtons from './SignButtons';

const StyledInner = styled.div.attrs({
  className: ' grid h-full sm:w-full md:w-100',
})`
  .top {
    ${tw`flex justify-between`}
  }

  .center {
    ${tw`relative text-center`}
    .title {
      ${tw`relative`}
      ::before {
        content: '';
        position: absolute;
        border: 1px solid ${props => props.theme.white};
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
`;
export default function InnerJumbotrom() {
  return (
    <StyledInner>
      <div className="top">
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} />
      </div>
      <div className="center md:hidden">
        <div className="title sm:text-3xl text-2xl">
          Search for a job now
        </div>
      </div>
      <div className="center hidden md:block">
        <div className="title">
          <h3>Book A Job Interview with The best Companies</h3>
        </div>
        <div className="content">
          <p>

            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda amet doloremque nulla impedit qui incidunt unde sint
            aliquam perspiciatis optio et debitis,
            veniam officiis sit expedita accusantium consequuntur quos! Et.
          </p>
        </div>
      </div>
      <SearchForm />
      <SignButtons />
    </StyledInner>
  );
}
