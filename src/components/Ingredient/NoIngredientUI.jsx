import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const StyledNoIngredientUIContainer = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledNoIngredientSpan = styled.span`
  font-family: GmarketSansMedium;
`;

export default function NoIngredientUI() {
  return (
    <StyledNoIngredientUIContainer>
      <FontAwesomeIcon icon={faX} size='2x' color='red' />
      <StyledNoIngredientSpan>There is no Ingredient Data yet!</StyledNoIngredientSpan>
    </StyledNoIngredientUIContainer>
  );
}
