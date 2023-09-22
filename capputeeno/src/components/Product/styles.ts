import styled from 'styled-components'
import NextImage from 'next/image'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 16rem;
  height: 23.625rem;
  border-radius: 0.5rem 0.5rem 0.25rem 0.25rem;
`
export const Title = styled.h1`
  color: #41414d;
  font-family: Saira;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
`
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #dce2e5;
`
export const Price = styled.span`
  font-family: Saira;
  font-size: 0.875rem;
  font-weight: 600;
  color: #09090a;
`
export const Wrapper = styled.div`
  padding: 0.7rem 0.5rem 0.7rem 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
`
export const Image = styled(NextImage)`
  aspect-ratio: 1/1;
  width: 100%;
  height: 18.75rem;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0px 0px;
`
