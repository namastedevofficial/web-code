import { Fragment, useContext, useEffect } from "react";
import CoursesContext from "../../context/CoursesContext";
import { getCoursesList, getExistingCoursesList } from "../../data/coursesData";
import WrapperComponent from "../../interfaces/WrapperComponent";
import Header from "./Header";

export default function Layout(props: WrapperComponent) {
  const { updateCoursesList } = useContext(CoursesContext);

  useEffect(() => {
    (async () => {
      // updateCoursesList(await getCoursesList());
      updateCoursesList(getExistingCoursesList());
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
}
