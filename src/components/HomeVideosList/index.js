import {Component} from 'react'

import {VideosListCont} from './styledComponents'

import HomeVideoItem from '../HomeVideoItem'

class HomeVideoList extends Component {
  render() {
    const {homeVideosList} = this.props
    return (
      <VideosListCont>
        {homeVideosList.map(eachObj => (
          <HomeVideoItem item={eachObj} />
        ))}
      </VideosListCont>
    )
  }
}

export default HomeVideoList
