import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {
  Redirect,
  Link,

} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import userActions from '../../actions/users';

const StyledSideNav = styled.div.attrs({
  className: ' pt-48 min-h-screen content-center md:block h-full border-r-2 border-gray-100 transition-all duration-700',
})`
  .linkList {
    ${tw``}
    div {
      ${tw`p-3`}
    }

    .one {
      background: ${props => props.theme.green};
      color: white;
    }
  }
`;

const StyledToggler = styled.button.attrs({
  className: 'self-start fixed bg-red-800 z-10 toggler',
})`
  background: ${props => props.theme.yellow};

`;

const SideNav = props => {
  const [redirect, setRedirect] = useState(false);
  const { signOut } = userActions;
  const dispatch = useDispatch();
  const isTablet = useMediaQuery({ query: '(max-width: 768px' });
  const { handleToggler, toggler } = props;

  return (
    <>
      { redirect ? <Redirect to="/" /> : ''}
      {isTablet ? (
        <StyledToggler type="button" className="self-start fixed bg-red-800 z-10 toggler" onClick={handleToggler}>
          <FontAwesomeIcon icon={faCoffee} />

        </StyledToggler>
      ) : ''}
      <StyledSideNav className={`${toggler ? 'col-start-1 col-end-4' : 'hidden col-start-1 col-end-2'}`}>
        { Object.keys(props).map(col => (

          <div key={col} className="linkList">
            <div className={props[col].active ? 'one' : ''}>
              {props[col].path === undefined ? '' : (

                <Link to={props[col].path} onClick={() => props[col].handleClick(props[col].path)}>
                  <p>
                    {props[col].text}
                  </p>
                </Link>
              )}
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => {
            dispatch(signOut());
            setRedirect(true);
          }}
        >
          {' '}
          Log Out
          {' '}

        </button>
      </StyledSideNav>
    </>
  );
};

export default SideNav;

SideNav.propTypes = {
  handleToggler: PropTypes.func.isRequired,
  toggler: PropTypes.bool.isRequired,
};
