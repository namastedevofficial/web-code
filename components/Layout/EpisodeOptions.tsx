import { useRouter } from "next/router";
import { FC } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import EpisodeOptionsNav from "../widgets/EpisodeOptionsNav";
import DiscussionSection from "./DiscussionSection";
import EpisodesMenu from "./EpisodesMenu";
import QnASection from "./QnASection";
import QuizzesSection from "./QuizzesSection";

const EpisodeOptions: FC = () => {
  const { width } = useWindowDimensions();
  const { asPath } = useRouter();
  return (
    <div className="episode-options mt-4 max-w-screen-b2 mx-auto">
      <EpisodeOptionsNav />
      {(asPath.includes("#episodes") || width > 1020) && <EpisodesMenu />}
      {asPath.includes("#quizzes") && <QuizzesSection />}
      {asPath.includes("#qna") && <QnASection />}
      {asPath.includes("#discussions") && <DiscussionSection />}
    </div>
  );
};

export default EpisodeOptions;
