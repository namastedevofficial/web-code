export default interface CoursesYoutubeData {
  items: [
    {
      id: string;
      contentDetails: {
        itemCount: number;
      };
      snippet: {
        title: string;
        channelTitle: string;
        description: string;
        thumbnails: {
          medium: {
            url: string;
          };
        };
      };
    }
  ];
}