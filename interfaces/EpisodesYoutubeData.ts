export default interface EpisodesYoutubeData {
  items: [
    {
      snippet: {
        title: string;
        description: string;
        thumbnails: {
          medium: {
            url: string;
          };
        };
        resourceId: {
          videoId: string;
        }
      };
    }
  ];
}
