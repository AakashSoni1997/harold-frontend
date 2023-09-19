import React, { useEffect, useRef, useState } from "react";
import "./ConversionContent.scss";
import ReactPlayer from "react-player";
import Player from "./player";

export const ConversionContent = ({
    ConversionTitle,
    ConversionDescripition,
    VideoUrl,
}) => {
    const inputElement = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [width]);

console.log("conversion called");

  return (
    <>
      <div className="conversion-content">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mt-lg-0 mt-5">
            <div className="point-bullet"></div>
            {width >= 992 ? <h2>{ConversionTitle}</h2> : null}
            <p dangerouslySetInnerHTML={{ __html: ConversionDescripition }}></p>
          </div>
          <div className="col-lg-6 col-md-9">
            {width <= 991 ? <h2>{ConversionTitle}</h2> : null}
            <Player VideoUrl={VideoUrl}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversionContent;
