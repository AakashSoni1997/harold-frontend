import React, { useEffect, useRef, useState } from "react";
import "./ConversionContent.scss";
import ReactPlayer from "react-player";

export const Player = ({ VideoUrl }) => {
  const inputElement = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [width]);

  return (
    <>
      <div className="video-bx">
        <ReactPlayer
          ref={inputElement}
          url={VideoUrl}
          playing={true}
          loop={true}
          controls={false}
          playsinline={true}
          config={{
            file: {
              attributes: {
                crossOrigin: "true",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default Player;
