import "./App.css";
import { Face } from "./Face";

//console.log(arc);

const width = 960;
const height = 500;

/* Arrow syntax for creating functions */
const App = () => (
  <Face
    width={width}
    height={height}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={10}
    eyeOffsetX={90}
    eyeOffsetY={100}
    eyeRadius={40}
    mouthRadius={140}
    mouthWidth={20}
  />
);

/*console.log(mouthArc());*/

export default App;
