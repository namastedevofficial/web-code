import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import EpisodeOptions from "../../../components/Layout/EpisodeOptions";
import VideoPlayer from "../../../components/Layout/VideoPlayer";
import CoursesContext from "../../../context/CoursesContext";
import EpisodeCardContent from "../../../interfaces/EpisodeCardContents";

export default function Episode() {
  const { query } = useRouter();
  const { currentEpisodesList } = useContext(CoursesContext);

  const [currentVideo, setCurrentVideo] = useState<EpisodeCardContent>();

  useEffect(() => {
    setCurrentVideo(
      currentEpisodesList.find((episode) => episode.episodeId === query.episode)
    );
  }, [currentEpisodesList, query]);

  return (
    <div className="course bp1:ml-80 bp2:ml-96 p-3 bp1:pt-6 bp1:px-6">
      <VideoPlayer
        title={currentVideo?.title ?? ''}
        embedId={
          typeof query.episode === "string" ? query.episode : "VIJxU2NYG-Y"
        }
      />
      <EpisodeOptions />
    </div>
  );
}
