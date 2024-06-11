import axios from "axios";

export default async function fetchYoutubeVideoIds(searchQueries) {
  console.log("Fetch Youtube Video IDs Called");
  try {
    const promises = searchQueries.map(async (searchQuery) => {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: "AIzaSyBdV5CTNVAl1sFEXBTBOspWzEU-JCY4Lwg",
            part: "snippet",
            maxResults: 1,
            type: "video",
            q: searchQuery,
          },
        }
      );
      const videoId = response.data.items[0]?.id.videoId;
      return videoId || null;
    });

    const results = await Promise.all(promises);
    return results.filter((videoId) => videoId !== null); // Filter out any null results
  } catch (error) {
    console.error("Error fetching video data:", error);
    return [];
  }
}
