import EpisodeData from './EpisodeData'
export default interface CourseData {
  courseId: string
  title: string
  courseUrl: string
  imageUrl: string
  description: string
  episodes: EpisodeData[]
  author: string
}
