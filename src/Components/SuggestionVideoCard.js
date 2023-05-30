import React from 'react'

const SuggestionVideoCard = ({video}) => {
    const {snippet, stats} = video.video;
    const {thumbnails} = video.video;
  return (
    <div className='m-2 p-2  shadow-lg flex'>  
        <div>
        <img className = "w-72 rounded-lg" src={thumbnails[0]?.url} alt='thumg' />
        </div>
        <div>
        <ul>
            <li className='font-bold overflow-clip'>{video.video.title}</li>
            <li>{stats.views}</li>
            <li>{video.publishedTimeText}</li>
        </ul>
        </div>
       
    </div>
  )
}

export default SuggestionVideoCard