import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 7vh;
`;

const HeaderNavBar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderNavBar>
        <img src='/assets/header/cocktail.png' alt='cocktail image' style={{ width: '40px', height: '40px' }} />
      </HeaderNavBar>
    </HeaderContainer>
  );
}
