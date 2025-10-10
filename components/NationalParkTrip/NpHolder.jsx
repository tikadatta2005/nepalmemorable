"use client";

import React from "react";
import BasicHolder from "../reusables/holder/BasicHolder";
import CardBook from "../reusables/cards/CardBook";

const NpHolder = ({ children }) => {
  return (
    <BasicHolder
    service="national-park"
      className=""
      url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=national-park&page=:page`}
      Card={CardBook}
    >
      {children}
    </BasicHolder>
  );
};

export default NpHolder;
