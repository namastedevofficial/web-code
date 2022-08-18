import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import CardContent from '../../interfaces/CardContent'

const Card: FC<CardContent> = ({
  courseUrl,
  imageUrl,
  title,
  episodeCount,
  author,
}) => {
  return (
    <Link href={courseUrl}>
      <a className="rounded-md border-2 border-grey5 p-2 block hover:border-grey4">
        <Image
          src={imageUrl}
          width={320}
          height={180}
          className="rounded-md"
          alt="namaste dev logo"
        />
        <div className="px-1 mt-auto">
          <h2 className="text-xl opacity-90 font-semibold">{title}</h2>
          <p className="text-sm opacity-80 my-0.5">{author}</p>
          <p className="text-xs opacity-70">
            {episodeCount} episode{episodeCount > 1 && 's'}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default Card
