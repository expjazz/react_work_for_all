import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledSideNav = styled.div.attrs({
  className: 'col-start-1 col-end-3 grid',
})`
  .linkList {
    div {
      ${tw`p-3`}
    }

    .one {
      background: ${props => props.theme.green};
      color: white;
    }
  }
`;
const SideNav = props => {
  const currentUser = useSelector(state => state.users.currentUser);
  const { path, url } = useRouteMatch();
  const { handleFocus, focus } = props;
  const { first, second } = focus;

  return (
    <StyledSideNav>
      <div className="linkList">
        <div className={first ? 'one' : ''}>

          <Link to="/users/user" onClick={handleFocus}>
            <p>
              {currentUser.email}
            </p>
          </Link>
        </div>
        <div className={second ? 'one' : ''}>

          <Link to={`${url}/rendering`} onClick={handleFocus}>
            Look for Jobs
          </Link>
        </div>

      </div>
    </StyledSideNav>
  );
};

export default SideNav;
