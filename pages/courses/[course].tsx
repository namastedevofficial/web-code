import EpisodesMenu from "../../components/Layout/EpisodesMenu";
import VideoPlayer from "../../components/Layout/VideoPlayer";

export default function Course() {
  return (
    <div>
      <EpisodesMenu />
      <div className="ml-80 bp2:ml-96 pt-6 px-6">
        <VideoPlayer title="Create 3D Site with Spline and React - Full Course" embedId="EJxeMbDTkVI"/>
      </div>
    </div>
  );
}
