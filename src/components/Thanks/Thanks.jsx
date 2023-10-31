import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdditionalOrderFirst from 'components/AdditionalOrder/AdditionalOrderFirst/AdditionalOrderFirst';
import {
  StyledThkText,
  StyledThkSection,
  StyledThkTitle,
  StyledThkBtn,
} from './Thanks.styled';

const Thanks = () => {
  const navigate = useNavigate();

  return (
    <StyledThkSection>
      <StyledThkTitle>Дякуємо за замовлення!</StyledThkTitle>
      <StyledThkText>
        Очікуйте на дзвінок від менеджера.
      </StyledThkText>
      <StyledThkBtn
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        Назад
      </StyledThkBtn>
      <AdditionalOrderFirst />
    </StyledThkSection>
  );
};

export default Thanks;
