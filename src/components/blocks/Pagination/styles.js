import styled from 'styled-components';

export const DivWithPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const PageSwitch = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  max-width: 40px;
  max-height: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #dddddd;
    color: #1a1a1a;
  }
  @media (max-width: 600px) {
    padding: 4px 8px;
  }
`;

export const DivWithPage = styled(PageSwitch)`
  ${({ selected }) =>
    selected &&
    `
		background-color: #171717;
		color: #ffffff;
		pointer-events: none;
	`}
  ${({ threeDots }) =>
    threeDots &&
    `
			pointer-events: none;
	`}
`;
