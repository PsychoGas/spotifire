import axios from "axios";

export default async function fetchYoutubeVideoIds(searchQueries) {
  try {
    const promises = searchQueries.map(async (searchQuery) => {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: "AIzaSyAqSUvx0ziby0vMduTnLGjXG9KrNOxIjpM",
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

// Usage example
const searchQueries = [
  "Him and I by G Eazy",
  "Shape of You by Ed Sheeran",
  "Blinding Lights by The Weeknd",
];
fetchYoutubeVideoIds(searchQueries)
  .then((videoIds) => {
    console.log("Video IDs:", videoIds);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
