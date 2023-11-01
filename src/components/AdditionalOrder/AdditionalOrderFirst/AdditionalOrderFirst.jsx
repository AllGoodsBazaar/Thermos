import React from 'react';
import brelok from '../../../images/additionalOrder/additionalOrder_1/fonarik-brelok.jpg';
import brelokS from '../../../images/additionalOrder/additionalOrder_1/brelokS.jpg';
import brelokT from '../../../images/additionalOrder/additionalOrder_1/brelokT.jpg';
import {
  StyledAdditImg,
  StyledAdditWrapper,
  StyledRightImg,
  StyledRigthImgWrapper,
  StyledImgWrapper,
  StyledNameWrapper,
  StyledName,
  StyledChar,
  StyledAdditBtn,
  StyledCharItem,
  StyledCharList
} from '../AdditionalOrder.styled';

const AdditionalOrderFirst = () => {
  return (
    <StyledAdditWrapper>
      <StyledImgWrapper>
        <StyledAdditImg src={brelok} alt="Фонарік-брелок" />
        <StyledRigthImgWrapper>
          <StyledRightImg src={brelokS} alt="Фонарік-брелок" />
          <StyledRightImg src={brelokT} alt="Фонарік-брелок" />
        </StyledRigthImgWrapper>
      </StyledImgWrapper>
      <StyledNameWrapper>
        <StyledName>Брелок-ліхтарик</StyledName>
        <StyledName>199 грн.</StyledName>
      </StyledNameWrapper>
      <StyledChar>Особливості</StyledChar>
      <StyledCharList>
        <StyledCharItem>Живлення від USB-кабеля</StyledCharItem>
        <StyledCharItem>Час зарядки 1.5 години</StyledCharItem>
        <StyledCharItem>4 режими освітлення</StyledCharItem>
        <StyledCharItem>Вбудований магніт</StyledCharItem>
      </StyledCharList>
      <StyledAdditBtn type="button">Замовити</StyledAdditBtn>
    </StyledAdditWrapper>
  );
};

export default AdditionalOrderFirst;
