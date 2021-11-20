import "./App.css";
import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";

//console.log(arc);

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;

const mouthRadius = 140;
const mouthWidth = 20;

/* Arrow syntax for creating functions */
const App = () => (
  <svg width={width} height={height}>
    {/* SVG group element */}
    <g transform={`translate(${centerX},${centerY})`}>
      {/* /* back ticks (`) are an ES6 string literal / /* React component calls
      with arguments (props) */}
      <BackgroundCircle
        /* props*/
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </g>
  </svg>
);

/*console.log(mouthArc());*/

export default App;
