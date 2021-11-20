export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => (
  /* 
      cant return two elements from a react component
      we need to wrap the circle elements. 
  
      - use svg group element: <g>...</g>
      - use react fragments: <>...</>
    */
  <>
    {/* /* Eyes */}
    <circle /* left eye */ cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
    <circle /* right eye */ cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
  </>
);
