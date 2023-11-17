import theme from '@/styles/theme'
import styled from 'styled-components'

export const Heading = styled.label`
  font-size: 26px;
`

export const Input = styled.input`
  height: 30px;
  width: 200px;
  background-color: unset;
  border-bottom: 2px solid ${theme.colors.lightGrey};
  outline: none;
  color: ${theme.colors.lightGrey};
  font-family: 'Fira Code', monospace;
  font-size: 20px;
  padding: 2px;
`

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`
