import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'
import {BiMenu} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'

export const PopupCont = styled(Popup)`
  width: 200px;
  height: 240px;
  &-content {
    margin: auto;
    background: #fff;
    width: 25%;
    height: 200px;
    padding: 0px;
    border: 0px;
    border-radius: 10px;
  }
  @media screen and (max-width: 767px) {
    width: 500px;
    &-content {
      width: 300px;
      height: 200px;
    }
  }
  @media screen and (max-width: 1080px) and (min-width: 768px) {
    &-content {
      width: 40% !important;
      height: 200px !important;
    }
  }
`
export const MenuPopup = styled(Popup)`
  width: 100%;
  height: 100vh;
  &-content {
    width: 100vw;
    height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${props => (props.isDark ? '#23231d' : 'transparent')};
`
export const Logo = styled.img`
  width: 100px;
`

export const RightItemsCont = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 100px;
  }
`

export const Avatar = styled.img`
  width: 30px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Logout = styled.button`
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutIcon = styled(FiLogOut)`
  font-size: 20px;
  display: none;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (max-width: 767px) {
    display: block;
  }
`
export const MenuIcon = styled(BiMenu)`
  font-size: 25px;
  display: none;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (max-width: 767px) {
    display: block;
  }
`
export const MenuOuter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${props => (props.isDark ? '#23231d' : 'white')};
`
export const CloseButtonCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  padding-top: 30px;
`
export const CloseBtn = styled(MdClose)`
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
