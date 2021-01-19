import React from 'react';
import VideoItem from './VideoItem';

const VideosList = ({videos ,onSelectingVideo}) => {

    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} selectingVideo={onSelectingVideo} singleVideo={video} />;
    });

    return ( 
        <div className="ui relaxed divided list"> { renderedList} </div>
     );
}
 
export default VideosList;