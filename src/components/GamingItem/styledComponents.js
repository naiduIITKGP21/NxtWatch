import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const DetailsLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  padding: 20px;

  width: 32%;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  padding-left: 10px;
  margin-top: 15px;
  margin-bottom: 14px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
    margin-top: 8px;
    margin-bottom: 7px;
  }
`

export const Desc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  padding-left: 10px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#909090')};
  @media screen and (max-width: 767px) {
    font-size: 9px;
  }
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
`

export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`
export const RowAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
