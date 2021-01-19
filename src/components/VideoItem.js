import React from 'react';
import './VideoItem.css';

const VideoItem = ({ singleVideo, selectingVideo }) => {
    return ( 
        <div onClick={() => { selectingVideo(singleVideo) }} className="video-item item">

            <img alt={singleVideo.snippet.title} className="ui image" src={singleVideo.snippet.thumbnails.medium.url} />
            <div className="content">
               <div className="header"> {singleVideo.snippet.title}</div>
            </div>
        </div>
     );
}
 
export default VideoItem;