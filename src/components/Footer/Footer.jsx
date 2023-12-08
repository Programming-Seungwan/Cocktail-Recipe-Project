import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 7vh;
`;

export default function Footer() {
  return <FooterContainer>This is footer!</FooterContainer>;
}
