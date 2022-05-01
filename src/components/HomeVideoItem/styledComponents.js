import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemCont = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 360px;
  background-color: transparent;
  padding: 20px;
  margin-bottom: 10px;
  text-decoration: none;
  transition: 0.3s all ease-out;

  &:hover {
    background-color: ${props => (props.isDark ? '#212529' : '#E9ECEF')};
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 9px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  cursor: pointer;
`
export const VideoItemLowerCont = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
`
export const ItemLeftCont = styled.div`
  width: 10%;
  padding: 1px;
`
export const ProfileImg = styled.img`
  width: 110%;
  margin-top: 10px;
`
export const ItemRightCont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 3px;
  padding-left: 17px;
`
export const VideoTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #787c78;
  margin-bottom: 10px;
  cursor: pointer;
`

export const Channel = styled.p`
  color: #939391;
  margin-bottom: 10px;
  font-size: 12px;
`

export const ViewsAndTime = styled.div`
  display: flex;
  width: 100%;
  color: #939391;
`

export const Views = styled.p`
  margin-right: 30px;
`

export const PublishedAt = styled.p``
