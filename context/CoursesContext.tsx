import { createContext, FC, ReactNode, useState } from "react";
import CardContent from "../interfaces/CardContent";
import EpisodeCardContent from "../interfaces/EpisodeCardContents";
import WrapperComponent from "../interfaces/WrapperComponent";

interface CoursesContextType {
  coursesList: CardContent[];
  currentEpisodesList: EpisodeCardContent[];
  updateCoursesList: (course: CardContent[]) => void;
  updateCurrentEpisodesList: (course: EpisodeCardContent[]) => void;
}

const CoursesContext = createContext<CoursesContextType>({
  coursesList: [],
  currentEpisodesList: [],
  updateCoursesList: () => {},
  updateCurrentEpisodesList: () => {},
});


export const CoursesProvider: FC<WrapperComponent> = ({ children }) => {
  const [coursesList, setCourses] = useState<CardContent[]>([]);
  const [currentEpisodesList, setCurrentEpisodesList] = useState<EpisodeCardContent[]>([]);

  function updateCoursesList(coursesList: CardContent[]) {
    setCourses(coursesList);
  }

  function updateCurrentEpisodesList(episodesList: EpisodeCardContent[]) {
    setCurrentEpisodesList(episodesList);
  }

  return (
    <CoursesContext.Provider
      value={{
        coursesList,
        currentEpisodesList,
        updateCoursesList,
        updateCurrentEpisodesList,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesContext;
