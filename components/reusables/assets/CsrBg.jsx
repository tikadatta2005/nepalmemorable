"use client";
import React from "react";

const CsrBg = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default CsrBg;
