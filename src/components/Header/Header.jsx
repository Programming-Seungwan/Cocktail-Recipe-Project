import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  padding: 10px;

  height: 7vh;
  display: flex;
  align-items: center;
`;

const HeaderNavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderNavBar>This is head!</HeaderNavBar>
    </HeaderContainer>
  );
}
