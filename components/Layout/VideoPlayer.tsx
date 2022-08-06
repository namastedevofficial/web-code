import BookmarkIcon from "../Icons/BookmarkIcon";
import LoveIcon from "../Icons/LoveIcon";
import PaperPlaneIcon from "../Icons/PaperPlaneIcon";

interface VideoDetails {
  title: string;
  embedId: string;
}

export default function VideoPlayer(props: VideoDetails) {
  const { title, embedId } = props;
  return (
    <div className="video-player max-w-screen-b2 mx-auto">
      <iframe
        className="w-full aspect-video shadow-md border-x border-t rounded-t-md border-gray-700"
        src={`https://www.youtube.com/embed/${embedId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="flex items-center justify-between py-2 bp1:py-1 px-3 border-x border-b rounded-b-md border-gray-700">
        <h1 className="bp1:text-xl font-bold opacity-90">
          {title}
        </h1>
        <div className="hidden bp1:flex">
          <LoveIcon />
          <PaperPlaneIcon />
          <BookmarkIcon />
        </div>
      </div>
    </div>
  );
}
