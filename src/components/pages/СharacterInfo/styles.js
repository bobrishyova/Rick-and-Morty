import styled from 'styled-components';

export const HeaderСharacterInfo = styled.div`
  width: 60%;
  margin: 0 auto;
  background-color: #565961;
  color: #ffffff;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 18px;
  padding: 40px;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 990px) {
    padding: 20px;
  }
  @media (max-width: 633px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
  @media (max-width: 350px) {
    padding: 15px;
  }
`;

export const InfoAboutСharacter = styled.div`
  margin-left: 20px;
  font-size: 22px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 990px) {
    height: 200px;
  }
  @media (max-width: 755px) {
    margin-left: 10px;
  }
  @media (max-width: 500px) {
    height: 150px;
  }
  @media (max-width: 350px) {
    height: 100px;
  }
`;

export const ImgCharacter = styled.img`
  border-radius: 10px;
  filter: drop-shadow(0 0 5px #ffffff);
  @media (max-width: 990px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 350px) {
    width: 100px;
    height: 100px;
  }
`;

export const ImgCharacterWithEpisodes = styled.div``;

export const InfoCharacter = styled.p`
  @media (max-width: 755px) {
    font-size: 14px;
  }
  @media (max-width: 350px) {
    font-size: 13px;
  }
`;

export const CharacterWithEpisodes = styled(InfoCharacter)`
	margin: 5px 0;
}
`;

export const NameСharacter = styled.p`
  font-size: 28px;
  @media (max-width: 755px) {
    font-size: 18px;
  }
  @media (max-width: 350px) {
    font-size: 16px;
  }
`;
