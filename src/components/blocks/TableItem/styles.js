import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWithInformation = styled(Link)`
  display: flex;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid #ffffff;
  align-items: center;
`;

export const ItemTable = styled.p`
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const DivItem = styled.div`
  width: 232px;
  text-align: center;
  &:first-child {
    text-align: start;
  }
  ${({ widthOfItems }) =>
    widthOfItems &&
    `
		width: 309px;
		&:first-child {
			text-align: start;
		}
	`}
`;
