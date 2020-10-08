import styled from 'styled-components';

export const TableHeader = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: #565961;
  color: #ffffff;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 18px;
  padding: 20px 40px;
  @media (max-width: 500px) {
    width: 95%;
    padding: 10px 20px;
  }
`;

export const Information = styled.div`
  display: flex;
  padding: 10px 0 10px 0;
  border-bottom: 4px double #ffffff;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const TableItemsWithDiv = styled.p`
  width: 309px;
  text-align: center;
  &:first-child {
    text-align: start;
  }
  ${({ firstItem }) =>
    firstItem &&
    `
		width: 232px;
	`}
`;
