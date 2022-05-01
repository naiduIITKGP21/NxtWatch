import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {FaFire, FaGamepad} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'

export const HomeIcon = styled(BsFillHouseDoorFill)`
  margin-right: 10px;
  font-size: 18px;
  color: ${props => {
    if (props.highlight) {
      return '#ff0b37'
    }
    if (!props.highlight && props.isDark) {
      return '#d7dfe9'
    }
    return 'black'
  }};
`
export const TrendingIcon = styled(FaFire)`
  margin-right: 10px;
  font-size: 18px;
  color: ${props => {
    if (props.highlight) {
      return '#ff0b37'
    }
    if (!props.highlight && props.isDark) {
      return '#d7dfe9'
    }
    return 'black'
  }};
`
export const GamingIcon = styled(FaGamepad)`
  margin-right: 10px;
  font-size: 18px;
  color: ${props => {
    if (props.highlight) {
      return '#ff0b37'
    }
    if (!props.highlight && props.isDark) {
      return '#d7dfe9'
    }
    return 'black'
  }};
`
export const SavedIcon = styled(MdPlaylistAdd)`
  margin-right: 10px;
  font-size: 18px;
  color: ${props => {
    if (props.highlight) {
      console.log('higlet')
      return '#ff0b37'
    }
    if (!props.highlight && props.isDark) {
      return '#d7dfe9'
    }
    return 'black'
  }};
`

export const SideBarOuterCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 91vh;
  padding-top: 15px;
  background-color: ${props => (props.isDark ? '#23231d' : 'white')};
  @media screen and (max-width: 767px) {
    min-height: 95vh;
    width: 100vw;
    padding: 5px;
    justify-content: center;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 17px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Desc1 = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const Desc2 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 10px;
  color: ${props => (props.isDark ? 'white' : '#475569')};
`
export const LogosImage = styled.img`
  width: 30px;
  margin: 5px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 400;
  color: black;
`

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline-start: 0;
`

export const NavLinkItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  border-radius: 5px;
  background-color: ${props => {
    if (props.highlight && props.isDark) {
      return '#383838'
    }
    if (props.highlight && !props.isDark) {
      return '#e2e8f0'
    }
    return 'transparent'
  }};

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`

export const NavLink = styled(Link)`
  font-weight: ${props => (props.highlight === true ? '700' : '500')};
  text-decoration: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  color: ${props => (props.isDark === true ? '#d7dfe9' : 'black')};
  margin-left: 8px;
  padding: 13px;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`
