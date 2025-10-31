"use client";

import React from "react";

const CsrVideo = (props) => {
  const src = props?.src;
  const type = props?.type;
  const prop = { ...props };
  delete prop.src;
  delete prop.type;
  return (
    <video {...prop}>
      <source src={src} type={type} />
    </video>
  );
};

export default CsrVideo;
