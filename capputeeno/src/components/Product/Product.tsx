import React from 'react'
import * as S from './styles'
import { MoneyFormat } from '@/utils/MoneyFormatted'
export interface ProductProps {
  image: string
  title: string
  price: number
}
export const Product: React.FC<ProductProps> = ({ image, price, title }) => {
  return (
    <S.Container>
      <S.Image quality={100} src={image} alt={title} width={256} height={300} />
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Line />
        <S.Price>{MoneyFormat(price)}</S.Price>
      </S.Wrapper>
    </S.Container>
  )
}
