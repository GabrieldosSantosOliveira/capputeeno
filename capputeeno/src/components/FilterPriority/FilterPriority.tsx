import { useState } from 'react'
import { ArrowBottom } from '../Icons/ArrowBottom'
import * as S from './styles'
export const FilterPriority = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <S.Button onClick={() => setIsOpen((prev) => !prev)}>
        Organizar por <ArrowBottom />{' '}
      </S.Button>
      {isOpen ? (
        <S.BoxOptions>
          <li>Novidades</li>
          <li>Preço: Maior - menor</li>
          <li>Preço: Menor - maior</li>
          <li>Mais vendidos</li>
        </S.BoxOptions>
      ) : null}
    </div>
  )
}
