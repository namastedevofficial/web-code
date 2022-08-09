import Card, { CardContent } from "../../components/widgets/Card";
import { getCoursesList } from "../../data/coursesData";

interface CoursePageData {
  coursesList: [CardContent];
}

const Courses = (props: CoursePageData) => {
  const { coursesList } = props;

  return (
    <div className="courses grid justify-items-center gap-8 px-2 py-8 mx-auto sm:px-4 md:px-6 max-w-none b0:max-w-[368px] b1:max-w-[720px] b2:max-w-[1072px] b3:max-w-[1424px] b4:max-w-[1776px]">
      {coursesList.map((course) => (
        <Card key={course.id} {...course} />
      ))}
    </div>
  );
};

export default Courses;

export async function getStaticProps() {
  const coursesList = [
    ...await getCoursesList(),
    // ...await getCoursesList("UCsBjURrPoezykLs9EqgamOA"),
    // ...await getCoursesList("UCXgGY0wkgOzynnHvSEVmE3A"),
  ];
  return {
    props: {
      coursesList,
    },
    revalidate: 600,
  };
}
