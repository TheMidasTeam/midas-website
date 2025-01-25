import { AvailableIcons, icons } from "./index";

export default function Icon({
  cn,
  w,
  h,
  fill,
  stroke,
  strokeWidth,
  icon,
}: {
  cn: string;
  w?: string;
  h?: string;
  fill?: string;
  stroke?: string; // stroke color
  strokeWidth?: string; // stroke width
  icon: AvailableIcons;
}) {
  return (
    <svg
      width={w || "15"}
      height={h || "15"}
      viewBox="0 0 15 15"
      className={cn}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={icons[icon]}
        fill={fill || "currentColor"}
        stroke={stroke || "currentColor"} // Apply stroke color
        strokeWidth={strokeWidth || "1"} // Set stroke width
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
