import styled from 'styled-components'
export const Input = styled.input`
  outline: none;
  border: none;
  display: flex;
  flex: 1;
  background-color: transparent;
  color: #737380;
  font-size: 0.875rem;
  font-family: Saira;
`
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  background: #f3f5f6;
  border-radius: 0.5rem;
  padding: 0.5625rem 1rem;
  gap: 0.25rem;
  max-width: 20rem;
  @media (max-width: 768px) {
    max-width: none;
  }
`
