import {Component} from 'react'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  HomeContainer,
  SideBarConatiner,
  HomeInnerContainer,
  HomeContentContainer,
  TrendingHeaderCont,
  IconCont,
  SavedIcon,
  TrendingHead,
  TrendingVideosCont,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../Sidebar'
import {NotFoundContainer, Image, Heading, Desc} from '../Home/styledComponents'

class Saved extends Component {
  renderSavedView = value => {
    const {savedVideos} = value
    console.log('Saved Videos : ', savedVideos)

    return (
      <TrendingVideosCont>
        {savedVideos.map(eachItem => (
          <TrendingVideoItem item={eachItem} />
        ))}
      </TrendingVideosCont>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const ele = (
            <HomeContainer>
              <Header />
              <HomeInnerContainer>
                <SideBarConatiner>
                  <SideBar />
                </SideBarConatiner>
                <HomeContentContainer isDark={value.isDarkTheme}>
                  {value.savedVideos.length === 0 && (
                    <NotFoundContainer>
                      <Image
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <Heading isDark={value.isDarkTheme}>
                        No saved videos found
                      </Heading>
                      <Desc>You can save your videos while watching them.</Desc>
                    </NotFoundContainer>
                  )}
                  {value.savedVideos.length !== 0 && (
                    <TrendingHeaderCont isDark={value.isDarkTheme}>
                      <IconCont isDark={value.isDarkTheme}>
                        <SavedIcon />
                      </IconCont>
                      <TrendingHead isDark={value.isDarkTheme}>
                        Saved
                      </TrendingHead>
                    </TrendingHeaderCont>
                  )}

                  {this.renderSavedView(value)}
                </HomeContentContainer>
              </HomeInnerContainer>
            </HomeContainer>
          )
          return ele
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Saved
