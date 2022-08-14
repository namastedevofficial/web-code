import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CoursesContext from "../../context/CoursesContext";
import { getEpisodesList } from "../../data/coursesData";
import CardContent from "../../interfaces/CardContent";
import EpisodeCard from "../widgets/EpisodeCard";

export default function EpisodesMenu() {
  const { coursesList, currentEpisodesList, updateCurrentEpisodesList } =
    useContext(CoursesContext);
  const {
    query: { course },
  } = useRouter();

  const [coursePageData, setCoursePageData] = useState<CardContent>();

  useEffect(() => {
    if (typeof course === "string")
      setCoursePageData(
        coursesList.find((courseItem) =>
          courseItem.courseUrl.includes(`/${course}`)
        )
      );
  }, [course, coursesList]);

  useEffect(() => {
    if (coursePageData) {
      (async () => {
        updateCurrentEpisodesList(await getEpisodesList(coursePageData.id));
      })();
    }
    //eslint-disable-next-line
  }, [coursePageData]);
  
  return (
    <nav className="episodes-menu slim-scrollbar bg-grey5 overflow-y-scroll h-[var(--episodes-height)] bp1:fixed bp1:top-[58px] bp1:left-0 bp1:h-[calc(100vh-58px)] bp1:w-80 bp2:w-96">
      {currentEpisodesList.map((episode) => (
        <EpisodeCard key={episode.episodeId} {...episode} />
      ))}
    </nav>
  );
}
