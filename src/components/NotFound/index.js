import {Component} from 'react'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  HomeContainer,
  HomeInnerContainer,
  SideBarConatiner,
  HomeContentContainer,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
} from '../Home/styledComponents'
import Header from '../Header'
import SideBar from '../Sidebar'

class NotFound extends Component {
  state = {
    isLoggedIn: false,
  }

  componentDidMount() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      this.setState({isLoggedIn: false})
    } else {
      this.setState({isLoggedIn: true})
    }
  }

  getStyle = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn) {
      return {width: '100%'}
    }
    return {width: '100%', height: '100vh'}
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const ele = (
            <HomeContainer>
              {isLoggedIn && <Header />}
              <HomeInnerContainer>
                {isLoggedIn && (
                  <SideBarConatiner>
                    <SideBar />
                  </SideBarConatiner>
                )}

                <HomeContentContainer
                  style={this.getStyle()}
                  isDark={value.isDarkTheme}
                >
                  <NotFoundContainer isDark={value.isDarkTheme}>
                    <Image
                      src={
                        value.isDarkTheme
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      }
                      alt="not found"
                    />
                    <Heading isDark={value.isDarkTheme} isDarkTheme>
                      Page Not Found
                    </Heading>
                    <Desc isDark={value.isDarkTheme}>
                      we’re sorry, the page you requested could not be found
                    </Desc>
                  </NotFoundContainer>
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

export default NotFound
