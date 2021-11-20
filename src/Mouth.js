import { arc } from "d3";
/* console.log(arc);*/

export const Mouth = ({ mouthRadius, mouthWidth }) => {
  /* mouthArc constant for drawing the mouth */ /* Constructor function*/
  const mouthArc = arc() /* Constructer function */
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius - mouthWidth) /* Method chaining pattern */
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  /* returning the svg path element, using arc helper function from d3. */
  return <path d={mouthArc()} />;
};
