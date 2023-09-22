import { FilterPriority } from '../FilterPriority/FilterPriority'
import * as S from './styles'
export const FilterBar = () => {
  return (
    <S.Container>
      <S.Link href="/">
        <S.FilterTag isFocus>Todos os Produtos</S.FilterTag>
      </S.Link>
      <S.Link href="/shirts">
        <S.FilterTag>Camisetas</S.FilterTag>
      </S.Link>
      <S.Link href="/mugs">
        <S.FilterTag>Canecas</S.FilterTag>
      </S.Link>
      <FilterPriority />
    </S.Container>
  )
}
