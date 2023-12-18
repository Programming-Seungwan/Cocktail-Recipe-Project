import styled from 'styled-components';

const StyledDeveloperContainer = styled.div`
  margin: 7vh 0;
  padding: 0 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

const StyledDeveloperImage = styled.img`
  border-radius: 15px;
  width: 250px;
  height: 250px;
  margin: 50px;
`;

const StyledDeveloperNameP = styled.p`
  font-family: Helvetica;
  font-size: 25px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDeveloperHisCareer = styled.div`
  width: 90%;
`;

const StyledDeveloperCareerContainer = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDeveloperCareerItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Helvetica;
  margin-bottom: 20px;
`;

export default function DeveloperDetail() {
  return (
    <StyledDeveloperContainer className='scroll-box'>
      <StyledDeveloperImage src='/assets/DeveloperProfile/seungwan.JPG' alt='developer photo image' />

      <StyledDeveloperNameP>Seung Wan, Kim</StyledDeveloperNameP>

      <StyledDeveloperCareerContainer>
        <StyledDeveloperNameP>Who is him?</StyledDeveloperNameP>
        <StyledDeveloperCareerItem>
          Whimoon 109th {'(from 2014 ~ 2016)'}
          <img src='/assets/DeveloperProfile/whimoon.webp' alt='whimoon logo' width='50px' height='50px' />
        </StyledDeveloperCareerItem>

        <StyledDeveloperCareerItem>
          Hongik Univ Biz Admin & CE
          <img src='/assets/DeveloperProfile/hongik.jpg' alt='hongik logo' width='50px' height='50px' />
        </StyledDeveloperCareerItem>

        <StyledDeveloperCareerItem>
          1st Division Artillery Regiment
          <img src='/assets/DeveloperProfile/junjin.JPG' alt='Military logo' width='50px' height='50px' />
        </StyledDeveloperCareerItem>

        <StyledDeveloperCareerItem>
          Doosan Bears fan & LG Twins Hater
          <img src='/assets/DeveloperProfile/doosan.png' alt='doosan logo' width='50px' height='50px' />
        </StyledDeveloperCareerItem>
      </StyledDeveloperCareerContainer>
    </StyledDeveloperContainer>
  );
}
