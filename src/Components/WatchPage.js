import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { ApiKey } from "../utils/YoutubeApi";
import BtnSlider from "./BtnSlider";
import SuggestionVideoCard from "./SuggestionVideoCard";
import axios from "axios";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addMessages } from "../utils/chatSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [liveMessage, setLiveMessage] = useState('');
  const [searchKey] = useSearchParams();
  const id = searchKey.get("v");
  useEffect(() => {
    dispatch(closeMenu());
    getVideo();
    getRelatedVideos();
  }, []);

  const getVideo = async () => {
    const video1 = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${ApiKey}`
    );
    const data = await video1.json();
    console.log(data);
    setVideo(data);
  };
  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/related-contents/',
    params: {
      id: 'kJQP7kiw5Fk',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '47e19ca7d2msh63790408a1bdbc5p1c0f56jsn9d93194de2b3',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addMessages({
      name : "veeru",
      message : liveMessage
    }))
    setLiveMessage('')
  }
    const getRelatedVideos = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        setRelatedVideos(response.data)
    } catch (error) {
        console.error(error);
    }
  }
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full font-bold space-y-4 m-12 px-2">
        <iframe
          width="720"
          height="365"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="overflow-ellipsis overflow-hidden">
          <h1>{video?.items[0]?.snippet?.title}</h1>
        </div>
       <CommentsContainer />
      </div>
      {/* <div className="flex flex-col mt-9">
        {relatedVideos?.contents?.map((video,index) => {
            if(video.type !== "video") return false;
            return (
                <SuggestionVideoCard key={index} video = {video}/>
            )
           
        })}     
      </div> */}
      <div className="mt-9 w-full flex flex-col gap-3">
        <LiveChat />
        <form onSubmit={handleForm}>
        <input type="text" className="bg-white-300 border border-spacing-x-4 px-2 rounded-md w-10/12" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)}/>
        <button>Send</button>
        </form>
       
      </div>
     
    </div>
  );
};

export default WatchPage;
