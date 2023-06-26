import styled from 'styled-components'

export const Header = styled.header`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5rem;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  gap: 2.5rem;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`
export const Logo = styled.a`
  font-size: 2.5rem;
  color: #5d5d6d;
  font-family: Saira Stencil One;
  font-weight: 400;
  line-height: 150%;
`
