import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBottleDroplet, faHome, faMagnifyingGlass, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #f8fafc;
  border-top: 1px solid #e5e7eb;
  width: 100%;
  max-width: 480px;
  position: fixed;
  bottom: 0;
  height: 7vh;
`;

const FooterNavBar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterNavBar>
        <StyledNavLink to='/'>
          <FontAwesomeIcon icon={faHome} size='2x' />
        </StyledNavLink>
        <StyledNavLink to='/random'>
          <FontAwesomeIcon icon={faQuestion} size='2x' />
        </StyledNavLink>
        <StyledNavLink to='/search-name'>
          <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />
        </StyledNavLink>
        <StyledNavLink to='/ingredient'>
          <FontAwesomeIcon icon={faBottleDroplet} size='2x' />
        </StyledNavLink>
        <StyledNavLink to='/category'>
          <FontAwesomeIcon icon={faBars} size='2x' />
        </StyledNavLink>
      </FooterNavBar>
    </FooterContainer>
  );
}
