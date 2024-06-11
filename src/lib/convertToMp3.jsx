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
    <div>
      {videos.map((video) => (
        <button
          key={video.link}
          onClick={() => (window.location.href = video.link)}
        >
          {video.title}
        </button>
      ))}
    </div>
  );
};

export default VideoButtons;
