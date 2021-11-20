import { FaceContainer } from "./FaceContainer";
import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";

const width = 960;
const height = 500;

export const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthRadius,
  mouthWidth,
}) => (
  //Pass in the props
  <FaceContainer
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}
  >
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
  </FaceContainer>
);
