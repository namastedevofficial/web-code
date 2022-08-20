import CourseData from '../interfaces/CourseData'
import EpisodeData from '../interfaces/EpisodeData'

const baseUrl = 'http://localhost:5000/api'

export const getCoursesList = async (): Promise<CourseData[]> => {
  const response = await fetch(`${baseUrl}/courses`)
  const data: CourseData[] = await response.json()
  return data
}

export const getEpisodesList = async (
  courseUrl: string
): Promise<EpisodeData[]> => {
  const response = await fetch(`${baseUrl}/course`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      courseUrl,
    }),
  })

  const data: CourseData = await response.json()
  return data.episodes
}
