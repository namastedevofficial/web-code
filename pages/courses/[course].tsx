import EpisodeOptions from "../../components/Layout/EpisodeOptions";
import EpisodesMenu from "../../components/Layout/EpisodesMenu";
import VideoPlayer from "../../components/Layout/VideoPlayer";

export default function Course() {
  return (
    <div className="course bp1:ml-80 bp2:ml-96 p-3 bp1:pt-6 bp1:px-6">
      <VideoPlayer
        title="Create 3D Site with Spline and React - Full Course"
        embedId="EJxeMbDTkVI"
      />
      <EpisodeOptions />
    </div>
  );
}
