import styled from 'styled-components';

const StyledHomeContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return <StyledHomeContainer>This is home!</StyledHomeContainer>;
}
