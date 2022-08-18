import { FC, useState } from 'react'

const BookmarkIcon: FC = () => {
  const [bookmarked, setBookmarked] = useState(false)
  const toggleBookmark = () => setBookmarked(!bookmarked)

  return (
    <div className="p-3 hover:bg-grey5 rounded" onClick={toggleBookmark}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={bookmarked ? 'white' : 'transparent'}
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </div>
  )
}

export default BookmarkIcon
