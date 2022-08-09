import convertToSlug from "../utils/convertToSlug";

const baseUrl = "https://www.googleapis.com/youtube/v3";

interface CoursesData {
  items: [
    {
      id: string;
      contentDetails: {
        itemCount: number;
      };
      snippet: {
        title: string;
        channelTitle: string;
        thumbnails: {
          medium: {
            url: string;
          };
        };
      };
    }
  ];
}

export const getCoursesList = async (channelId: string = "UC3N9i_KvKZYP4F84FPIzgPQ") => {
  const response = await fetch(
    `${baseUrl}/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
  );

  const data: CoursesData = await response.json();
  return data.items.map((item) => {
    return {
      id: item.id,
      title: item.snippet.title,
      courseUrl: `/courses/${convertToSlug(item.snippet.title)}`,
      imageUrl: item.snippet.thumbnails.medium.url,
      author: item.snippet.channelTitle,
      episodeCount: item.contentDetails.itemCount,
    };
  });
};
