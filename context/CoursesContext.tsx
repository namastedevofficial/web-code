import { createContext, FC, useState } from 'react'
import CourseData from '../interfaces/CourseData'
import EpisodeData from '../interfaces/EpisodeData'
import WrapperComponent from '../interfaces/WrapperComponent'

interface CoursesContextType {
  coursesList: CourseData[]
  currentEpisodesList: EpisodeData[]
  updateCoursesList: (course: CourseData[]) => void
  updateCurrentEpisodesList: (course: EpisodeData[]) => void
}

const CoursesContext = createContext<CoursesContextType>({
  coursesList: [],
  currentEpisodesList: [],
  updateCoursesList: () => 0,
  updateCurrentEpisodesList: () => 0,
})

export const CoursesProvider: FC<WrapperComponent> = ({ children }) => {
  const [coursesList, setCourses] = useState<CourseData[]>([])
  const [currentEpisodesList, setCurrentEpisodesList] = useState<EpisodeData[]>(
    []
  )

  function updateCoursesList(coursesList: CourseData[]) {
    setCourses(coursesList)
  }

  function updateCurrentEpisodesList(episodesList: EpisodeData[]) {
    setCurrentEpisodesList(episodesList)
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
  )
}

export default CoursesContext
