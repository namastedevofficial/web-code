import { NextPage } from 'next'
import { useContext } from 'react'
import Card from '../../components/widgets/Card'
import CoursesContext from '../../context/CoursesContext'

const Courses: NextPage = () => {
	const { coursesList } = useContext(CoursesContext)
	return (
		<div className="courses grid justify-items-center gap-8 px-2 py-8 mx-auto sm:px-4 md:px-6 max-w-none b0:max-w-[368px] b1:max-w-[720px] b2:max-w-[1072px] b3:max-w-[1424px] b4:max-w-[1776px]">
			{coursesList.map((course) => (
				<Card key={course.id} {...course} />
			))}
		</div>
	)
}

export default Courses
