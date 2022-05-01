import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  LogoutCont,
  LougoutHead,
  ButtonCont,
  Cancel,
  Confirm,
} from './styledComponents'

class LogoutComp extends Component {
  logout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {close} = this.props
          const ele = (
            <LogoutCont isDark={value.isDarkTheme}>
              <LougoutHead isDark={value.isDarkTheme}>
                Are you sure, you ant to logout?
              </LougoutHead>
              <ButtonCont>
                <Cancel onClick={() => close()}>Cancel</Cancel>
                <Confirm onClick={this.logout}>Confirm</Confirm>
              </ButtonCont>
            </LogoutCont>
          )
          return ele
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(LogoutComp)
