import EpisodeOptionsNav from "../widgets/EpisodeOptionsNav";
import EpisodesMenu from "./EpisodesMenu";


export default function EpisodeOptions() {
  return (
    <div className="mt-4 max-w-screen-b2 mx-auto">
      <EpisodeOptionsNav />
      <EpisodesMenu />
    </div>
  )
}
