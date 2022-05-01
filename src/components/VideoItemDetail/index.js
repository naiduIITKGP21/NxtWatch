import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/nxtWatchContext'

import {
  HomeContainer,
  SideBarConatiner,
  HomeInnerContainer,
  HomeContentContainer,
  LoaderContainer,
  VideoPlayerCont,
  ContentCont,
  Heading,
  ActionsCont,
  ViewsAndAt,
  Views,
  PublishedAt,
  ActionInnerCont,
  LikeCont,
  DislikeCont,
  SaveCont,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
  ActionText,
  HorLine,
  VideoItemLowerCont,
  ItemLeftCont,
  ProfileImg,
  Channel,
  Subscribers,
  Description,
  Player,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../Sidebar'
import {ItemRightCont} from '../HomeVideoItem/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetail extends Component {
  state = {
    video: null,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideo()
  }

  formatData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideo = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = this.formatData(fetchedData)
      console.log(updatedData)

      this.setState({
        video: updatedData,
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

  renderVideoDetail = value => {
    const {video} = this.state

    const onLike = () => {
      value.updateLikedVideos(video.id)
    }

    const onDisLiked = () => {
      value.updateDislikedVideos(video.id)
    }

    const onSaved = () => {
      value.updateSavedVideos(video)
    }

    const isSaved = () => {
      const saved = value.savedVideos.filter(
        eachData => eachData.id === video.id,
      )
      return saved.length > 0
    }

    if (video !== null) {
      const ele = (
        <VideoPlayerCont>
          <Player controls url={video.videoUrl} />
          <ContentCont>
            <Heading isDark={value.isDarkTheme}>{video.title}</Heading>
            <ActionsCont>
              <ViewsAndAt>
                <Views>{video.viewCount} views</Views>
                <PublishedAt>{video.publishedAt}</PublishedAt>
              </ViewsAndAt>
              <ActionInnerCont>
                <LikeCont
                  onClick={onLike}
                  liked={value.likedVideos.includes(video.id)}
                >
                  <LikeIcon id="like" />
                  <ActionText htmlFor="like">Like</ActionText>
                </LikeCont>
                <DislikeCont
                  onClick={onDisLiked}
                  disliked={value.dislikedVideos.includes(video.id)}
                >
                  <DislikeIcon />
                  <ActionText>Dislike</ActionText>
                </DislikeCont>
                <SaveCont onClick={onSaved} saved={isSaved(video)}>
                  <SaveIcon />
                  <ActionText>Save{isSaved(video) && 'd'}</ActionText>
                </SaveCont>
              </ActionInnerCont>
            </ActionsCont>
            <HorLine isDark={value.isDarkTheme} />
            <VideoItemLowerCont>
              <ItemLeftCont>
                <ProfileImg src={video.profileImageUrl} alt="profile" />
              </ItemLeftCont>
              <ItemRightCont>
                <Channel isDark={value.isDarkTheme}>{video.name}</Channel>
                <Subscribers>{video.subscriberCount} subscribers</Subscribers>
                <Description isDark={value.isDarkTheme}>
                  {video.description}
                </Description>
              </ItemRightCont>
            </VideoItemLowerCont>
          </ContentCont>
        </VideoPlayerCont>
      )
      return ele
    }
    return this.renderLoadingView()
  }

  showVideosInnerCont = value => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetail(value)
      case apiStatusConstants.failure:
        return this.renderVideoDetail(value)
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

export default VideoItemDetail
