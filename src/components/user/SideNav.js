import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {
  Link,

} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const isTablet = useMediaQuery({ query: '(max-width: 768px' });

  return (
    <>
      {isTablet ? (
        <StyledToggler type="button" className="self-start fixed bg-red-800 z-10 toggler" onClick={props.handleToggler}>
          <FontAwesomeIcon icon={faCoffee} />

        </StyledToggler>
      ) : ''}
      <StyledSideNav className={`${props.toggler ? 'col-start-1 col-end-4' : 'hidden col-start-1 col-end-2'}`}>
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
      </StyledSideNav>
    </>
  );
};

export default SideNav;

// {/* <div className="linkList">
//   <div className={first ? 'one' : ''}>

//     <Link to="/users/user" onClick={handleFocus}>
//       <p>
//         {currentUser ? currentUser.user.name : 'loading'}
//       </p>
//     </Link>
//   </div>

//   <div className={second ? 'one' : ''}>

//     <Link to={`${url}/edit`} onClick={handleFocus}>
//       Edit your information
//     </Link>

//   </div>
//   <div className={second ? 'one' : ''}>

//     <Link to={`${url}/searchjobs`} onClick={handleFocus}>
//       Look for Jobs
//     </Link>

//   </div>

// </div> */}
