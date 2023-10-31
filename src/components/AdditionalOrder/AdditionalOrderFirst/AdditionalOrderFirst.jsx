import React from 'react';
import brelok from '../../../images/additionalOrder/additionalOrder_1/fonarik-brelok.jpg';
import brelokS from '../../../images/additionalOrder/additionalOrder_1/brelokS.jpg';
import brelokT from '../../../images/additionalOrder/additionalOrder_1/brelokT.jpg';
import {
  StyledAdditImg,
  StyledAdditTittle,
  StyledAdditWrapper,
  StyledRightImg,
  StyledRigthImgWrapper,
  StyledImgWrapper,
  StyledNameWrapper,
  StyledName,
  StyledChar,
  StyledAdditBtn,
} from '../AdditionalOrder.styled';

const AdditionalOrderFirst = () => {
  return (
    <StyledAdditWrapper>
      <StyledAdditTittle>
        Нехай блекаут не стане перешкодою! Оберіть наші ліхтарі і створіть
        комфорт для себе та своєї родини.
      </StyledAdditTittle>
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
      <StyledChar>Опис та характеристики</StyledChar>
      <StyledAdditBtn type="button">Замовити</StyledAdditBtn>
    </StyledAdditWrapper>
  );
};

export default AdditionalOrderFirst;
