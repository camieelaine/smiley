export const FaceContainer = ({
  children,
  width,
  height,
  centerX,
  centerY,
}) => (
  <svg width={width} height={height}>
    {/* SVG group element */}
    <g transform={`translate(${centerX},${centerY})`}>{children}</g>
  </svg>
);
