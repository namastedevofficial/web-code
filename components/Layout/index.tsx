import { FC, Fragment, useContext, useEffect } from 'react'
import CoursesContext from '../../context/CoursesContext'
import { getCoursesList, getExistingCoursesList } from '../../service/YouTubeDataService'
import WrapperComponent from '../../interfaces/WrapperComponent'
import Header from './Header'

const Layout: FC<WrapperComponent> = ({ children }) => {
	const { updateCoursesList } = useContext(CoursesContext)

	useEffect(() => {
		(async () => {
			// updateCoursesList(await getCoursesList());
			updateCoursesList(getExistingCoursesList())
		})()
		// eslint-disable-next-line
  }, []);

	return (
		<Fragment>
			<Header />
			{children}
		</Fragment>
	)
}

export default Layout
