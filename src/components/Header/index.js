import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {FaSun} from 'react-icons/fa'
import {BsMoon} from 'react-icons/bs'
import 'reactjs-popup/dist/index.css'
import LogoutComp from '../LogoutComp'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  HeaderContainer,
  Logo,
  RightItemsCont,
  Avatar,
  Logout,
  PopupCont,
  LogoutIcon,
  MenuIcon,
  MenuPopup,
  MenuOuter,
  CloseButtonCont,
  CloseBtn,
} from './styledComponents'

import Sidebar from '../Sidebar'

class Header extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const onHome = () => {
            value.changeSelectedRoute('home')
          }

          return (
            <HeaderContainer isDark={value.isDarkTheme}>
              {!value.isDarkTheme && (
                <Link to="/" onClick={onHome}>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="logo"
                  />
                </Link>
              )}
              {value.isDarkTheme && (
                <Link to="/" onClick={onHome}>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="logo"
                  />
                </Link>
              )}
              <RightItemsCont>
                {!value.isDarkTheme && (
                  <BsMoon size="20" onClick={value.toggleDark} />
                )}
                {value.isDarkTheme && (
                  <FaSun fill="white" size="20" onClick={value.toggleDark} />
                )}
                <Avatar src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png " />
                <MenuPopup
                  modal
                  trigger={<MenuIcon isDark={value.isDarkTheme} />}
                >
                  {close => (
                    <MenuOuter isDark={value.isDarkTheme}>
                      <CloseButtonCont>
                        <CloseBtn isDark={value.isDarkTheme} onClick={close} />
                      </CloseButtonCont>

                      <Sidebar />
                    </MenuOuter>
                  )}
                </MenuPopup>

                <PopupCont
                  modal
                  trigger={
                    <div type="button">
                      <Logout isDark={value.isDarkTheme} type="button">
                        Logout
                      </Logout>
                      <LogoutIcon isDark={value.isDarkTheme} type="button" />
                    </div>
                  }
                >
                  {close => <LogoutComp close={close} />}
                </PopupCont>
              </RightItemsCont>
            </HeaderContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
