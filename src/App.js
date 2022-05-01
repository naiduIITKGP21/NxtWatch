import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './ProtectedRoute'
import Trending from './components/Trending'
import NxtWatchContext from './context/nxtWatchContext'
import VideoItemDetail from './components/VideoItemDetail'
import Gaming from './components/Gaming'
import Saved from './components/Saved'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isDarkTheme: false,
    selectedRoute: 'home',
    likedVideos: [],
    dislikedVideos: [],
    savedVideos: [],
  }

  componentDidMount() {
    const {history} = this.props
    console.log('History : ', history.location.pathname)
    let path = ''
    path = history.location.pathname
    const updatedPath = path.slice(1)
    console.log('path : ', updatedPath)
    if (
      updatedPath.length !== 0 &&
      ['home', 'trending', 'gaming', 'saved'].includes(updatedPath)
    ) {
      this.setState({selectedRoute: updatedPath})
    }
  }

  toggleDark = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeSelectedRoute = route => {
    this.setState({selectedRoute: route})
  }

  updateLikedVideos = id => {
    console.log('LIKED')

    this.setState(prevState => {
      if (prevState.dislikedVideos.includes(id)) {
        const prevDisliked = prevState.dislikedVideos
        prevDisliked.splice(prevState.dislikedVideos.indexOf(id), 1)
        return {
          dislikedVideos: prevDisliked,
        }
      }
      return {...prevState}
    })

    this.setState(prevState => {
      if (prevState.likedVideos.includes(id)) {
        const prevLiked = prevState.likedVideos
        prevLiked.splice(prevLiked.indexOf(id), 1)
        return {
          likedVideos: prevLiked,
        }
      }
      return {likedVideos: [...prevState.likedVideos, id]}
    })
  }

  updateDislikedVideos = id => {
    this.setState(prevState => {
      if (prevState.likedVideos.includes(id)) {
        const prevLiked = prevState.likedVideos
        prevLiked.splice(prevLiked.indexOf(id), 1)
        return {
          likedVideos: prevLiked,
        }
      }
      return {...prevState}
    })

    console.log({...this.state})

    this.setState(prevState => {
      if (prevState.dislikedVideos.includes(id)) {
        const prevDisliked = prevState.dislikedVideos
        prevDisliked.splice(prevState.dislikedVideos.indexOf(id), 1)
        return {
          dislikedVideos: prevDisliked,
        }
      }
      return {dislikedVideos: [...prevState.dislikedVideos, id]}
    })
  }

  updateSavedVideos = video => {
    console.log(video)
    this.setState(prevState => {
      const savedFilter = prevState.savedVideos.filter(
        eachdata => eachdata.id === video.id,
      )

      if (savedFilter.length > 0) {
        return {
          savedVideos: prevState.savedVideos.filter(
            eachdata => eachdata.id !== video.id,
          ),
        }
      }
      return {savedVideos: [...prevState.savedVideos, video]}
    })
  }

  render() {
    const {
      isDarkTheme,
      selectedRoute,
      likedVideos,
      dislikedVideos,
      savedVideos,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          toggleDark: this.toggleDark,
          selectedRoute,
          changeSelectedRoute: this.changeSelectedRoute,
          likedVideos,
          dislikedVideos,
          savedVideos,
          updateLikedVideos: this.updateLikedVideos,
          updateDislikedVideos: this.updateDislikedVideos,
          updateSavedVideos: this.updateSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/video/:id" component={VideoItemDetail} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved" component={Saved} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default withRouter(App)
