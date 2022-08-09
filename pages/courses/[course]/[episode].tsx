import EpisodeOptions from "../../../components/Layout/EpisodeOptions";
import VideoPlayer from "../../../components/Layout/VideoPlayer";

export default function Episode() {
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
