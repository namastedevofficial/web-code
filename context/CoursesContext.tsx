import { createContext, ReactNode, useState } from "react";
import CardContent from "../interfaces/CardContent";
import WrapperComponent from "../interfaces/WrapperComponent";

interface CoursesContextType {
  coursesList: CardContent[];
  updateCoursesList: (course: CardContent[]) => void;
}

const CoursesContext = createContext<CoursesContextType>({
  coursesList: [],
  updateCoursesList: () => {},
});

export function CoursesProvider(props: WrapperComponent) {
  const [coursesList, setCourses] = useState<CardContent[]>([]);

  function updateCoursesList(courses: CardContent[]) {
    setCourses(courses);
  }

  return (
    <CoursesContext.Provider value={{ coursesList, updateCoursesList }}>
      {props.children}
    </CoursesContext.Provider>
  );
}

export default CoursesContext;
