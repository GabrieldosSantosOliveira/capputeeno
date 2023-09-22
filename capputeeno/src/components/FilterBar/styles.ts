import styled from 'styled-components'
import NextLink from 'next/link'
export interface FilterTagProps {
  isFocus?: boolean
}
export const FilterTag = styled.div<FilterTagProps>`
  font-family: Saira;
  font-size: 1rem;
  font-weight: ${(props) => (props.isFocus ? 600 : 400)};
  color: ${(props) => (props.isFocus ? '#41414D' : '#737380')};
  background: none;
  border: none;
  border-bottom: ${(props) => (props.isFocus ? '0.25rem' : '0px')} solid #ffa585;
`
export const Container = styled.div`
  display: flex;
`
export const Link = styled(NextLink)`
  text-decoration: none;
`
