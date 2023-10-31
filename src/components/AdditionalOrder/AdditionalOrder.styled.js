import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledAdditWrapper = styled.div`
  margin-top: 40px;
`;

export const StyledImgWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledAdditImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const StyledRightImg = styled.img`
  width: 100px;
  height: 95px;
`;

export const StyledRigthImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledAdditTittle = styled.h2`
  width: 310px;
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;

  color: ${colors.mainTextColor};
  background-color: rgba(0, 0, 0, 0.5);
`;
