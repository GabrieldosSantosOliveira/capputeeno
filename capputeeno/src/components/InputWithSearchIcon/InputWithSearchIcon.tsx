import { SearchIcon } from '../Icons/SearchIcon'
import * as S from './styles'
import { FC, InputHTMLAttributes } from 'react'
export interface InputWithSearchIconProps
  extends InputHTMLAttributes<HTMLInputElement> {}
export const InputWithSearchIcon: FC<InputWithSearchIconProps> = (props) => {
  return (
    <S.InputContainer>
      <S.Input {...props} />
      <SearchIcon />
    </S.InputContainer>
  )
}
