import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  HomeContainer,
  SideBarConatiner,
  HomeInnerContainer,
  HomeContentContainer,
  Banner,
  BannerContent,
  Logo,
  BannerHeading,
  GetItNowButton,
  CloseButton,
  SearchIcon,
  SearchInput,
  SearchBarContainer,
  SearchIconContainer,
  VideosContainer,
  VideosInnerContainer,
  LoaderContainer,
  NotFoundContainer,
  Heading,
  Desc,
  NavLink,
  Retry,
  Image,
  MainContainer,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../Sidebar'
import HomeVideoList from '../HomeVideosList'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    bannerDisplay: true,
    searchText: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  onInputChange = event => {
    this.setState({searchText: event.target.value})
  }

  onSearchIconClicked = () => {
    this.getVideosList()
  }

  onSearchSubmit = event => {
    event.preventDefault()
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {searchText} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  closeBanner = () => {
    this.setState({bannerDisplay: false})
  }

  renderJobsListView = value => {
    const {videosList, bannerDisplay} = this.state
    if (videosList.length > 0) {
      return <HomeVideoList homeVideosList={videosList} />
    }
    return (
      <MainContainer bannerPresent={bannerDisplay}>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <Heading isDark={value.isDarkTheme}>No Search results found</Heading>
        <Desc isDark={value.isDarkTheme}>
          Try different keywords or remove search.
        </Desc>

        <Retry type="button" onClick={this.getVideosList}>
          Retry
        </Retry>
      </MainContainer>
    )
  }

  renderLoadingView = () => {
    const {bannerDisplay} = this.state
    return (
      <LoaderContainer bannerDisplay={bannerDisplay} data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderFailureView = value => (
    <NotFoundContainer isDark={value.isDarkTheme}>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <Heading isDark={value.isDarkTheme}>Oops! Something Went Wrong</Heading>
      <Desc isDark={value.isDarkTheme}>
        We are having some trouble to complete your request.Please try again.
      </Desc>
      <NavLink>
        <Retry type="button" onClick={this.getVideos}>
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  showVideosInnerCont = value => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsListView(value)
      case apiStatusConstants.failure:
        return this.renderFailureView(value)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {bannerDisplay, searchText} = this.state
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
                  {bannerDisplay && (
                    <Banner>
                      <BannerContent>
                        <Logo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="img"
                        />
                        <BannerHeading>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerHeading>
                        <GetItNowButton>GET IT NOW</GetItNowButton>
                      </BannerContent>
                      <CloseButton onClick={this.closeBanner} />
                    </Banner>
                  )}
                  <VideosContainer>
                    <SearchBarContainer
                      isDark={value.isDarkTheme}
                      onSubmit={this.onSearchSubmit}
                    >
                      <SearchInput
                        onChange={this.onInputChange}
                        value={searchText}
                        placeholder="Search"
                        isDark={value.isDarkTheme}
                      />
                      <SearchIconContainer onClick={this.onSearchIconClicked}>
                        <SearchIcon type="submit" />
                      </SearchIconContainer>
                    </SearchBarContainer>
                    <VideosInnerContainer>
                      {this.showVideosInnerCont(value)}
                    </VideosInnerContainer>
                  </VideosContainer>
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

export default Home
