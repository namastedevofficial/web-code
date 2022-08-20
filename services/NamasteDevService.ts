export const getCoursesList = async () => {
  const response = await fetch('http://localhost:5000/api/courses')
  const data = await response.json()
  return data
}

export const getEpisodesList = async (courseUrl: string) => {
  console.log(courseUrl)
  const response = await fetch('http://localhost:5000/api/course', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      courseUrl,
    }),
  })

  const data = await response.json()
  console.log(data)
  return data.episodes
}
