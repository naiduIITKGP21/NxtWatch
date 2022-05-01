import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'

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
    width: 100vw;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => (props.bannerDisplay ? '50vh' : '80vh')};
`

export const TrendingHeaderCont = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
  display: flex;
  padding: 20px;
  align-items: center;
  padding-left: 45px;
`

export const IconCont = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#e0e9f0')};
  padding: 30px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 30px;
  @media screen and (max-width: 767px) {
    padding: 15px;
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`

export const TrendingIcon = styled(FaFire)`
  font-size: 40px;
  color: red;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const TrendingHead = styled.h1`
  font-weight: 700;
  font-size: 40px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const TrendingVideosCont = styled.div`
  padding: 40px;
`
