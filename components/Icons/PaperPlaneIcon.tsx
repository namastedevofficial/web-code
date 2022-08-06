interface PaperPlaneIconDetails {
  fillColor: string;
  strokeColor: string;
}

PaperPlaneIcon.defaultProps = {
  fillColor: "transparent",
  strokeColor: "currentColor",
};

export default function PaperPlaneIcon(props: PaperPlaneIconDetails) {
  const { fillColor, strokeColor } = props;
  return (
    <div className="paper-plane p-3 rounded hover:bg-grey5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 transition-transform rotate-45 -mt-[2px] -mr-[2px]"
      fill={fillColor}
      viewBox="0 0 24 24"
      stroke={strokeColor}
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
    </div>
  );
}
