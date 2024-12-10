import { SVGProps } from "react";

export function PowerBi(props: SVGProps<SVGSVGElement>) {
  const {
    stroke = "currentColor",
    fill = "currentColor",
    height = 24,
    width = 24,
    ...rest
  } = props;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      fill={fill}
      height={height}
      width={width}
      {...rest}
    >
      <title>Power BI</title>
      <path d="M10 12a1 1 0 0 1 1 1v11H4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h6Zm-2-.5V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17h-4.5V13a1.5 1.5 0 0 0-1.5-1.5H8Zm5-6V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-3.5V7A1.5 1.5 0 0 0 15 5.5h-2Z" />
    </svg>
  );
}
