import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import CoursesContext from '../../../context/CoursesContext'
import { getEpisodesList } from '../../../service/YouTubeDataService'
import CardContent from '../../../interfaces/CardContent'

const Course: NextPage = () => {
  const { coursesList, currentEpisodesList, updateCurrentEpisodesList } =
    useContext(CoursesContext)
  const {
    query: { course },
  } = useRouter()

  const [coursePageData, setCoursePageData] = useState<CardContent>()

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
        updateCurrentEpisodesList(await getEpisodesList(coursePageData.id))
      })()
    }
    //eslint-disable-next-line
  }, [coursePageData])

  return (
    <div className="course flex max-w-screen-b3 px-2 py-8 mx-auto sm:px-4 md:px-6">
      <div className="flex fixed">
        <div className="flex flex-col w-96 h-[88vh] overflow-y-scroll slim-scrollbar px-2">
          <div>
            <Image
              src={
                coursePageData?.imageUrl ||
                'https://i.ytimg.com/vi/pN6jk0uUrD8/mqdefault.jpg'
              }
              width={320}
              height={180}
              className="rounded-md w-full"
              alt="namaste dev logo"
            />
          </div>
          <h1 className="text-2xl mt-3">{coursePageData?.title}</h1>
          <p className="my-1">{coursePageData?.episodeCount} episodes</p>
          <p className="whitespace-pre-wrap opacity-75">
            {coursePageData?.description}
          </p>
        </div>
      </div>
      <div className="ml-96">
        {currentEpisodesList?.map((episode) => (
          <Link
            key={episode.episodeId}
            href={`${coursePageData?.courseUrl}/${episode.episodeId}#quizzes`}
          >
            <a className="flex py-2 pl-4  hover:bg-grey5">
              <div>
                <Image
                  src={episode.imgUrl}
                  width={160}
                  height={90}
                  className="rounded-md w-full"
                  alt={episode.title}
                />
              </div>
              <div className="ml-4">
                <p className="text-lg opacity-95">{episode.title}</p>
                <p className="opacity-80">{coursePageData?.author}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Course
