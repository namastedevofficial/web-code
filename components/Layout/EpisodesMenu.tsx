import { useRouter } from 'next/router'
import { FC, useContext, useEffect, useState } from 'react'
import CoursesContext from '../../context/CoursesContext'
import { getEpisodesList } from '../../services/NamasteDevService'
import CourseData from '../../interfaces/CourseData'
import EpisodeCard from '../widgets/EpisodeCard'

const EpisodesMenu: FC = () => {
  const { coursesList, currentEpisodesList, updateCurrentEpisodesList } =
    useContext(CoursesContext)
  const {
    query: { course },
  } = useRouter()

  const [coursePageData, setCoursePageData] = useState<CourseData>()

  useEffect(() => {
    if (typeof course === 'string')
      setCoursePageData(
        coursesList.find((courseItem) =>
          courseItem.courseUrl.includes(`/${course}`)
        )
      )
  }, [course, coursesList])

  useEffect(() => {
    if (coursePageData) {
      ;(async () => {
        updateCurrentEpisodesList(
          await getEpisodesList(coursePageData.courseUrl)
        )
      })()
    }
    //eslint-disable-next-line
  }, [coursePageData])

  return (
    <nav className="episodes-menu slim-scrollbar bg-grey5 overflow-y-scroll h-[var(--episodes-height)] bp1:fixed bp1:top-[58px] bp1:left-0 bp1:h-[calc(100vh-58px)] bp1:w-80 bp2:w-96">
      {currentEpisodesList.map((episode) => (
        <EpisodeCard key={episode.episodeId} {...episode} />
      ))}
    </nav>
  )
}
export default EpisodesMenu
