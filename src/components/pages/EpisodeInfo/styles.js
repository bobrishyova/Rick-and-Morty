import styled from 'styled-components';

export const HeaderEpisodeInfo = styled.div`
  width: 40%;
  margin: 0 auto;
  background-color: #565961;
  color: #ffffff;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 18px;
  padding: 40px;
  @media (max-width: 1000px) {
    width: 60%;
  }
  @media (max-width: 660px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 95%;
    padding: 20px;
  }
`;

export const DivWithNameEpisode = styled.div`
  font-size: 28px;
  @media (max-width: 660px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const DivWithAirDateEpisode = styled.div`
  font-size: 22px;
  margin-top: 15px;
  @media (max-width: 660px) {
    font-size: 16px;
  }
`;

export const DivWithEpisode = styled.p`
  font-size: 22px;
  margin: 15px 0 5px 0;
  @media (max-width: 660px) {
    font-size: 16px;
  }
`;

export const Characters = styled.p`
  font-size: 22px;
  margin-bottom: 5px;
  @media (max-width: 660px) {
    font-size: 16px;
  }
`;

export const AllCharacters = styled.p`
  @media (max-width: 660px) {
    font-size: 16px;
  }
`;
