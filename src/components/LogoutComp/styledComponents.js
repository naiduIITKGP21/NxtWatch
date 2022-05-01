import styled from 'styled-components'

export const LogoutCont = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#212121' : 'white')};
`
export const LougoutHead = styled.h1`
  font-size: 17px;
  margin-bottom: 50px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const ButtonCont = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`
export const Cancel = styled.button`
  padding: 15px 30px;
  border-radius: 5px;
  border: 0px;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: #94a3b8;
  color: #94a3b8;
  font-size: 15px;
  cursor: pointer;
`
export const Confirm = styled.button`
  padding: 15px 30px;
  border-radius: 5px;
  border: 0px;
  background-color: #3b82f6;
  color: white;
  font-size: 15px;
  cursor: pointer;
`
