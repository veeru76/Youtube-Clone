import React, { useEffect, useState } from "react";
import { YoutubeApi } from "../utils/YoutubeApi";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer =  () => {
    const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const allVideos = await fetch(YoutubeApi);
    const data= await allVideos.json();
    console.log(data);
    setVideos(data.items)
  };
  return <div className="flex flex-wrap">
    {videos.map((video) => 
    <Link to = {"/watch?v="+ video.id}><VideoCard key = {video.id}
    info = {video} />
    </Link>)}    
  </div>;
};

export default VideoContainer;
