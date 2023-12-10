import styled from 'styled-components';
import { useDataContext } from '../../dataContext';

const StyledDeveloperContainer = styled.div`
  margin: 7vh 0;
  padding: 0 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow-y: auto;
`;

export default function DeveloperDetail() {
  return <StyledDeveloperContainer>This is Seungwan Detail!</StyledDeveloperContainer>;
}
