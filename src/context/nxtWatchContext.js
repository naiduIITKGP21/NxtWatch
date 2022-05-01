import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleDark: () => {},
  selectedRoute: '',
  changeSelectedRoute: () => {},
  likedVideos: [],
  dislikedVideos: [],
  savedVideos: [],
  updateLikedVideos: () => {},
  updateDislikedVideos: () => {},
  updateSavedVideos: () => {},
})

export default NxtWatchContext
