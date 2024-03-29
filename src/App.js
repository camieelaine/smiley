import "./App.css";
import { range } from "d3";
import { Face } from "./Face";

//console.log(arc);

const width = 160;
const height = 160;

//const array = [1,2,3,4,5,6];
const array = range(15);

/* Arrow syntax for creating functions */
const App = () =>
  array.map(() => (
    <>
      <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={6 + Math.random() * 3}
        eyeOffsetX={20 + Math.random() * 9}
        eyeOffsetY={20 + Math.random() * 15}
        eyeRadius={5 + Math.random() * 10}
        mouthWidth={7 + Math.random() * 9}
        mouthRadius={30 + Math.random() * 10}
      />
    </>
  ));

/*console.log(mouthArc());*/

export default App;
