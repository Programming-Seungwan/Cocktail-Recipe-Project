import styled from 'styled-components';

const StyledDeveloperContainer = styled.div`
  margin: 7vh 0;
  padding: 0 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;

const StyledDeveloperImage = styled.img`
  border-radius: 15px;
  width: 250px;
  height: 250px;
  margin: 40px;
`;

const StyledDeveloperNameP = styled.p`
  font-family: GmarketSansMedium;
  font-size: 25px;
`;

const StyledDeveloperCareerContainer = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const StyledDeveloperCareerItem = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
`;

export default function DeveloperDetail() {
  return (
    <StyledDeveloperContainer>
      <StyledDeveloperImage src='/assets/DeveloperProfile/seungwan.JPG' alt='developer photo image' />
      <StyledDeveloperNameP>Kim Seung Wan</StyledDeveloperNameP>
      <StyledDeveloperCareerContainer>
        <StyledDeveloperCareerItem>
          Whimoon 109th {'(from 2014 ~ 2016)'}
          <img src='/assets/DeveloperProfile/whimoon.webp' alt='whimoon logo' width='50px' height='50px' />
        </StyledDeveloperCareerItem>
        <StyledDeveloperCareerItem>
          Hongik Business & Computer Engineering
          <img src='/assets/DeveloperProfile/hongik.jpg' alt='hongik logo' width='50px' height='50px' />
        </StyledDeveloperCareerItem>
        <StyledDeveloperCareerItem>
          1st Infantry Division Artillery Regiement
          <img src='/assets/DeveloperProfile/junjin.JPG' alt='Military logo' width='50px' height='50px' />
        </StyledDeveloperCareerItem>
      </StyledDeveloperCareerContainer>
    </StyledDeveloperContainer>
  );
}
