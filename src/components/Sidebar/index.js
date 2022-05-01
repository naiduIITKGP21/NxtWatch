import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  NavLink,
  NavLinksList,
  NavLinkItem,
  SocialContainer,
  ImageContainer,
  LogosImage,
  SideBarOuterCont,
  Desc1,
  Desc2,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const onHomeSelect = () => {
            value.changeSelectedRoute('home')
          }

          const onTrendingSelect = () => {
            value.changeSelectedRoute('trending')
          }

          const onGamingSelect = () => {
            value.changeSelectedRoute('gaming')
          }

          const onSavedSelect = () => {
            value.changeSelectedRoute('saved')
          }
          return (
            <SideBarOuterCont isDark={value.isDarkTheme}>
              <NavLinksList>
                <NavLinkItem
                  highlight={value.selectedRoute === 'home'}
                  onClick={onHomeSelect}
                  isDark={value.isDarkTheme}
                >
                  <NavLink
                    isDark={value.isDarkTheme}
                    highlight={value.selectedRoute === 'home'}
                    to="/"
                  >
                    <HomeIcon
                      isDark={value.isDarkTheme}
                      highlight={value.selectedRoute === 'home'}
                    />
                    Home
                  </NavLink>
                </NavLinkItem>

                <NavLinkItem
                  highlight={value.selectedRoute === 'trending'}
                  onClick={onTrendingSelect}
                  isDark={value.isDarkTheme}
                >
                  <NavLink
                    isDark={value.isDarkTheme}
                    highlight={value.selectedRoute === 'trending'}
                    to="/trending"
                  >
                    <TrendingIcon
                      isDark={value.isDarkTheme}
                      highlight={value.selectedRoute === 'trending'}
                    />
                    Trending
                  </NavLink>
                </NavLinkItem>
                <NavLinkItem
                  highlight={value.selectedRoute === 'gaming'}
                  onClick={onGamingSelect}
                  isDark={value.isDarkTheme}
                >
                  <NavLink
                    isDark={value.isDarkTheme}
                    highlight={value.selectedRoute === 'gaming'}
                    to="/gaming"
                  >
                    <GamingIcon
                      isDark={value.isDarkTheme}
                      highlight={value.selectedRoute === 'gaming'}
                    />
                    Gaming
                  </NavLink>
                </NavLinkItem>
                <NavLinkItem
                  highlight={value.selectedRoute === 'saved'}
                  onClick={onSavedSelect}
                  isDark={value.isDarkTheme}
                >
                  <NavLink
                    isDark={value.isDarkTheme}
                    highlight={value.selectedRoute === 'saved'}
                    to="/saved"
                  >
                    <SavedIcon
                      isDark={value.isDarkTheme}
                      highlight={value.selectedRoute === 'saved'}
                    />
                    Saved Videos
                  </NavLink>
                </NavLinkItem>
              </NavLinksList>

              <SocialContainer>
                <Desc1 isDark={value.isDarkTheme}> CONTACT US</Desc1>
                <ImageContainer>
                  <LogosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LogosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LogosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ImageContainer>
                <Desc2 isDark={value.isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </Desc2>
              </SocialContainer>
            </SideBarOuterCont>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
