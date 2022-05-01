import {Component} from 'react'

import {
  VideoItemCont,
  ItemRightCont,
  Thumbnail,
  VideoItemLowerCont,
  ItemLeftCont,
  ProfileImg,
  VideoTitle,
  Channel,
  ViewsAndTime,
  Views,
  PublishedAt,
} from './styledComponents'

import NxtWatchContext from '../../context/nxtWatchContext'

class HomeVideoItem extends Component {
  render() {
    const {item} = this.props
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const ele = (
            <VideoItemCont isDark={value.isDarkTheme} to={`/video/${item.id}`}>
              <Thumbnail src={item.thumbnailUrl} alt="thumnail" />
              <VideoItemLowerCont>
                <ItemLeftCont>
                  <ProfileImg src={item.profileImageUrl} alt="profile" />
                </ItemLeftCont>
                <ItemRightCont>
                  <VideoTitle>{item.title}</VideoTitle>
                  <Channel>{item.name}</Channel>
                  <ViewsAndTime>
                    <Views>{item.viewCount} views</Views>
                    <PublishedAt>{item.publishedAt}</PublishedAt>
                  </ViewsAndTime>
                </ItemRightCont>
              </VideoItemLowerCont>
            </VideoItemCont>
          )

          return ele
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomeVideoItem
