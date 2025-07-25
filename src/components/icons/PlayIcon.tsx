const PlayIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group cursor-pointer"
    >
      <circle
        opacity="0.25"
        cx="24"
        cy="24"
        r="24"
        fill="#A445ED"
        className="group-hover:opacity-100"
      />
      <path
        className="group-hover:fill-white"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 18V31L32 24.5L19 18Z"
        fill="#A445ED"
      />
    </svg>
  );
};

export default PlayIcon;
