const DEFAULT_SIZE = 20;
const DEFAULT_COLOR: SpinnerColor = "gray";

type SpinnerColor = "white" | "gray" | "red";

export function Spinner({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}: {
  size?: number;
  color?: SpinnerColor;
}) {
  const validColor =
    color === "gray" ? "#737373" : color === "red" ? "#ee3b3b" : "white";

  return (
    <svg
      stroke={validColor}
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin text-center icon-md"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" y1="2" x2="12" y2="6"></line>
      <line x1="12" y1="18" x2="12" y2="22"></line>
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
      <line x1="2" y1="12" x2="6" y2="12"></line>
      <line x1="18" y1="12" x2="22" y2="12"></line>
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
    </svg>
  );
}
