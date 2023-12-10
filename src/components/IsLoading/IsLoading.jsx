import styled from 'styled-components';

const StyledIsLoadingUI = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function IsLoading() {
  return <StyledIsLoadingUI>Now Loading...</StyledIsLoadingUI>;
}
