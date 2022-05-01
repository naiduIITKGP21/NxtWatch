import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  HomeContainer,
  SideBarConatiner,
  HomeInnerContainer,
  HomeContentContainer,
  LoaderContainer,
  TrendingHeaderCont,
  IconCont,
  TrendingIcon,
  TrendingHead,
  TrendingVideosCont,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../Sidebar'
import {
  NotFoundContainer,
  Heading,
  Desc,
  NavLink,
  Retry,
} from '../Home/styledComponents'
import {Image} from '../Login/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideoList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/trending`

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
        trendingVideoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => {
    const {bannerDisplay} = this.state
    return (
      <LoaderContainer bannerDisplay={bannerDisplay} data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderTrendingView = () => {
    const {trendingVideoList} = this.state
    return (
      <TrendingVideosCont>
        {trendingVideoList.map(eachItem => (
          <TrendingVideoItem item={eachItem} />
        ))}
      </TrendingVideosCont>
    )
  }

  renderFailureView = value => (
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      ]<Heading isDark={value.isDarkTheme}>Oops! Something Went Wrong</Heading>
      <Desc>
        We are having some trouble to complete your request.Please try again.
      </Desc>
      <NavLink>
        <Retry type="button" onClick={this.getTrendingVideosList}>
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  showVideosInnerCont = value => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingView()
      case apiStatusConstants.failure:
        return this.renderFailureView(value)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
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
                  <TrendingHeaderCont isDark={value.isDarkTheme}>
                    <IconCont isDark={value.isDarkTheme}>
                      <TrendingIcon />
                    </IconCont>
                    <TrendingHead isDark={value.isDarkTheme}>
                      Trending
                    </TrendingHead>
                  </TrendingHeaderCont>

                  {this.showVideosInnerCont(value)}
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

export default Trending
