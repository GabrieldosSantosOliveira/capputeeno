import { Product as IProduct } from '@/pages'
import * as S from './styles'
import { Product } from '../Product/Product'
import React from 'react'
export interface ProductsProps {
  products: IProduct[]
}
export const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <S.Container>
      {products.map(({ id, image_url, name, price_in_cents }) => {
        return (
          <Product
            key={id}
            image={image_url}
            price={price_in_cents}
            title={name}
          />
        )
      })}
    </S.Container>
  )
}
