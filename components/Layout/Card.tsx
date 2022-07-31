import Image from "next/image";
import Link from "next/link";

interface CardContent {
  courseUrl: string;
  imageUrl: string;
  title: string;
  description: string;
  duration: number;
  lectureCount: number;
}

export default function Card(props: CardContent) {
  const { courseUrl, imageUrl, title, description, duration, lectureCount } =
    props;
  return (
    <Link href={courseUrl}>
      <a className="rounded-md border-2 border-grey5 p-2 block w-80 hover:border-grey4">
        <Image
          src={imageUrl}
          width={320}
          height={180}
          className="rounded-md"
          alt="namaste dev logo"
        />
        <div className="px-1 mt-auto">
          <h2 className="text-xl opacity-90 font-semibold">{title}</h2>
          <p className="text-sm opacity-80 my-0.5">{description}</p>
          <p className="text-xs opacity-70">
            {duration} total hours • {lectureCount} episodes
          </p>
        </div>
      </a>
    </Link>
  );
}