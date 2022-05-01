import styled from 'styled-components'
import {MdClose, MdSearch} from 'react-icons/md'
import {Link} from 'react-router-dom'

export const CloseButton = styled(MdClose)`
  margin-top: 15px;
  margin-right: 15px;
  cursor: pointer;
`

export const HomeContainer = styled.div`
  min-height: 100vh;
`
export const SideBarConatiner = styled.div`
  width: 20%;

  min-height: 91vh;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HomeInnerContainer = styled.div`
  display: flex;
`
export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  overflow-y: scroll;
  background-color: ${props => (props.isDark ? 'black' : '#faf9f7')};
  height: 91vh;

  &::-webkit-scrollbar {
    width: 0px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 260px;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 150px;
  }
`
export const BannerContent = styled.div`
  height: 260px;
  padding: 30px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    height: 150px;
    width: 40%;
    padding: 20px;
  }
`
export const Logo = styled.img`
  width: 150px;
  @media screen and (max-width: 767px) {
    width: 85px;
  }
`
export const BannerHeading = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 9px;
  }
`

export const GetItNowButton = styled.button`
  padding: 10px;
  border: 1px solid black;
  background-color: transparent;
  border-radius: 3px;
  align-self: flex-start;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    padding: 5px;
    font-size: 10px;
  }
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const SearchBarContainer = styled.form`
  display: flex;
  width: 45%;
  background-color: '#f4f4f2';
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isDark ? '#333d49' : '#d6d7d3')};
  outline-width: 0;
  border-radius: 4px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const SearchInput = styled.input`
  width: 87%;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isDark ? '#333d49' : '#d6d7d3')};
  outline-width: 0;
  border-bottom: 0px;
  border-top: 0px;
  border-left: 0px;
  background-color: transparent;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const SearchIconContainer = styled.div`
  width: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: '#f4f4f2';
`

export const SearchIcon = styled(MdSearch)`
  font-size: 20px;
  color: #b9bab8;
`
export const VideosInnerContainer = styled.div`
  margin-top: 15px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => (props.bannerDisplay ? '50vh' : '80vh')};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: transparent;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  width: 100%;
  min-height: ${props => (props.bannerPresent ? '50vh' : '80vh')};
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin-top: 20px;
`

export const Image = styled.img`
  width: 40%;
  margin: 20px;
`

export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
  color: ${props => (props.isDark ? '#cbd5e1' : 'grey')};
  margin-top: 20px;
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`
export const Retry = styled.button`
  padding: 13px 26px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
  background-color: #4f46e5;
  border: 0px;
  border-radius: 5px;
`
