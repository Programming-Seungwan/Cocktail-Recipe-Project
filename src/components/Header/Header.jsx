import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
  width: 100%;
  max-width: 480px;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 7vh;
`;

const HeaderNavBar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderDeveloperName = styled.p`
  font-family: Pretendard-Regular;
  font-weight: 600;
  color: #4b5563;
  &: hover {
    cursor: pointer;
  }
`;

const StyledATagNonDeco = styled.a`
  text-decoration: none;
  color: black;
`;

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderNavBar>
        <HeaderDeveloperName onClick={() => navigate('/developer-detail')}>SeungWan</HeaderDeveloperName>
        <img src='/assets/header/cocktail.png' alt='cocktail image' style={{ width: '40px', height: '40px' }} />
        <StyledATagNonDeco href='https://github.com/Programming-Seungwan' target='_blank'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </StyledATagNonDeco>
      </HeaderNavBar>
    </HeaderContainer>
  );
}
