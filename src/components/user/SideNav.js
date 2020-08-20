import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledSideNav = styled.div.attrs({
  className: 'col-start-1 col-end-3 grid items-center min-h-screen content-center h-full',
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
const SideNav = props => (
  <StyledSideNav>
    { Object.keys(props).map(col => (

      <div key={col} className="linkList">
        <div className={props[col].active ? 'one' : ''}>
          <Link to={props[col].path}>
            <p>
              {props[col].text}
            </p>
          </Link>
        </div>
      </div>
    ))}
  </StyledSideNav>
);

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
