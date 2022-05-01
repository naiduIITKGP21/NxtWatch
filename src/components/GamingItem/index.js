import {
  DetailsLink,
  ListItem,
  ThumbnailImage,
  Heading,
  Desc,
} from './styledComponents'
import NxtWatchContext from '../../context/nxtWatchContext'

const GamingItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {gamingVideos} = props
      const {id, thumbnailUrl, title, viewCount} = gamingVideos

      return (
        <DetailsLink to={`/video/${id}`}>
          <ListItem>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />

            <Heading isDarkTheme={isDarkTheme}>{title}</Heading>

            <Desc isDarkTheme={isDarkTheme}>
              {viewCount} Watching Worldwide
            </Desc>
          </ListItem>
        </DetailsLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingItem
