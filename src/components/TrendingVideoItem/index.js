import {Component} from 'react'

import {
  TrendingVideoItemCont,
  Thumbnail,
  TrendingContentCont,
  TrendingHeader,
  TrendingChannel,
  ViewAndAt,
  Views,
  PublishedAt,
} from './styledComponents'
import NxtWatchContext from '../../context/nxtWatchContext'

class TrendingVideoItem extends Component {
  render() {
    const {item} = this.props
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const ele = (
            <TrendingVideoItemCont
              to={`/video/${item.id}`}
              isDark={value.isDarkTheme}
            >
              <Thumbnail src={item.thumbnailUrl} alt="thumb" />
              <TrendingContentCont>
                <TrendingHeader isDark={value.isDarkTheme}>
                  {item.title}
                </TrendingHeader>
                <TrendingChannel>{item.name}</TrendingChannel>
                <ViewAndAt>
                  <Views>{item.viewCount} views</Views>
                  <PublishedAt>{item.publishedAt}</PublishedAt>
                </ViewAndAt>
              </TrendingContentCont>
            </TrendingVideoItemCont>
          )

          return ele
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingVideoItem
