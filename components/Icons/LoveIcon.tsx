import { FC, useState } from "react";

const LoveIcon: FC = () => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);
  return (
    <div className="p-3 hover:bg-grey5 rounded" onClick={toggleLike}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={liked ? "#ef4444" : "transparent"}
        viewBox="0 0 24 24"
        stroke={liked ? "#ef4444" : "white"}
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </div>
  );
};

export default LoveIcon;
