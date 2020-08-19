import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import FormL from './FormL';

const StyledRightL = styled.div.attrs({})`
& {
  .top {
    ${tw`flex justify-center content-center flex-col items-center`}
    .title {
      ${tw`text-3xl text-center`}
    }

    p {
      ${tw`relative`}
      :before {
        content: '';
        position: absolute;
        border: 1px solid gray;
        top: 50%;
        left: 25px;
        width: 100px;
      }

      ::after {
        content: '';
        position: absolute;
        border: 1px solid gray;
        top: 50%;
        right: 25px;
        width: 100px;
      }
    }
  }
}
`;
const RightL = () => {
  const a = 1;
  return (
    <StyledRightL>
      <div className="top">
        <h3 className="title">
          Sign up
          {' '}
          <br />
          {' '}
          to find your  dream job
        </h3>
        <p>or</p>
      </div>
      {' '}
      <FormL />

    </StyledRightL>
  );
};

export default RightL;
