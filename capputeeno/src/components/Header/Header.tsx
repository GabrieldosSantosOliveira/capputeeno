import { SearchIcon } from '../Icons/SearchIcon'
import { ShoppingBag } from '../Icons/ShoppingBag'
import { InputWithSearchIcon } from '../InputWithSearchIcon/InputWithSearchIcon'
import * as S from './styles'
export const Header = () => {
  return (
    <S.Header>
      <S.Logo>capputeeno</S.Logo>
      <S.Wrapper>
        <InputWithSearchIcon type='ra' placeholder="Procurando por algo específico?" />
        <details open></details>
        <ShoppingBag />
      </S.Wrapper>
    </S.Header>
  )
}
