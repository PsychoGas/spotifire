import "./downloadStyle.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const VideoButtons = ({ videoIds }) => {
  const [videos, setVideos] = useState([]);
  console.log(videoIds);

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await Promise.all(
        videoIds.map(async (id) => {
          const response = await axios.get(
            "https://youtube-mp36.p.rapidapi.com/dl",
            {
              headers: {
                "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
                "x-rapidapi-key":
                  "6c55130b63mshe975a3e241ddb81p1a89f7jsnd5cc49fd5fe2",
              },
              params: { id },
            }
          );
          return response.data;
        })
      );
      setVideos(fetchedVideos);
    };

    fetchVideos();
  }, [videoIds]);

  return (
    <div className="pt-10 py-5 px-10 d-flex justify-content-center align-items-center">
      <h1 className="text-3xl font-bold text-center text-white drop-shadow-lg shadow-lg py-5">
        Click Below To Download
      </h1>
      <div className={videoIds ? "cardDown" : ""}>
        {videos.map((video) => (
          <p
            key={video.link}
            onClick={() => (window.location.href = video.link)}
          >
            <span>{video.title}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default VideoButtons;
