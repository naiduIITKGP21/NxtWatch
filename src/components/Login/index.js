import {Component} from 'react'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  LoginOuterContainer,
  LoginContainer,
  ImageContainer,
  Image,
  FormContainer,
  Form,
  Label,
  Input,
  FormElement,
  CheckBoxCont,
  CheckBox,
  CheckBoxLabel,
  Button,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    usernameValid: true,
    passwordValid: true,
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  getInputType = () => {
    const {showPassword} = this.state
    if (showPassword) {
      return 'text'
    }
    return 'password'
  }

  changeInputType = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value, usernameValid: true})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value, passwordValid: true})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  loginHandler = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const jsonData = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(jsonData.jwt_token)
    } else {
      this.onSubmitFailure(jsonData.error_msg)
    }
  }

  onFormSubmit = event => {
    const {username, password} = this.state
    event.preventDefault()
    if (username === '') {
      this.setState({usernameValid: false})
    }
    if (password === '') {
      this.setState({passwordValid: false})
    }
    this.loginHandler()
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            username,
            password,
            usernameValid,
            passwordValid,
            showSubmitError,
            errorMsg,
          } = this.state
          const ele = (
            <LoginOuterContainer isDark={value.isDarkTheme}>
              <LoginContainer isDark={value.isDarkTheme}>
                <ImageContainer>
                  <Image
                    src={
                      !value.isDarkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                  />
                </ImageContainer>
                <FormContainer>
                  <Form onSubmit={this.onFormSubmit}>
                    <FormElement>
                      <Label isDark={value.isDarkTheme} htmlFor="username">
                        USERNAME
                      </Label>
                      <Input
                        isDark={value.isDarkTheme}
                        value={username}
                        id="username"
                        type="text"
                        placeholder="Username"
                        onChange={this.onUsernameChange}
                        validColor={usernameValid}
                      />
                    </FormElement>
                    <FormElement>
                      <Label isDark={value.isDarkTheme} htmlFor="password">
                        PASSWORD
                      </Label>
                      <Input
                        isDark={value.isDarkTheme}
                        id="password"
                        type={this.getInputType()}
                        placeholder="Password"
                        value={password}
                        onChange={this.onPasswordChange}
                        validColor={passwordValid}
                      />
                    </FormElement>
                    <CheckBoxCont>
                      <CheckBox
                        onChange={this.changeInputType}
                        id="showPassword"
                        type="checkbox"
                      />
                      <CheckBoxLabel
                        isDark={value.isDarkTheme}
                        htmlFor="showPassword"
                      >
                        Show Password
                      </CheckBoxLabel>
                    </CheckBoxCont>

                    <Button type="submit">Login</Button>
                    {showSubmitError && <ErrorMsg>* {errorMsg}</ErrorMsg>}
                  </Form>
                </FormContainer>
              </LoginContainer>
            </LoginOuterContainer>
          )

          return ele
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
