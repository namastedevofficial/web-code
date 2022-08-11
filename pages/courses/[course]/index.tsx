import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import CoursesContext from "../../../context/CoursesContext";

const Course = () => {
  const coursesCtx = useContext(CoursesContext);
  const { query: {course} } = useRouter();

  useEffect(() => {
    if(typeof course === "string")
    console.log(coursesCtx?.coursesList.find((courseItem) =>  courseItem.courseUrl.includes(course)));
  })
  
  return <div>Course Page</div>;
};

export default Course;
