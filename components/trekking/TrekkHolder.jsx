"use client";

import React from "react";
import BasicHolder from "../reusables/holder/BasicHolder";
import CardBook from "../reusables/cards/CardBook";

const TrekkHolder = ({ children }) => {
  return (
    <BasicHolder
      service="trekking"
      className=""
      url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=trekking&page=:page`}
      Card={CardBook}
    >
      {children}
    </BasicHolder>
  );
};

export default TrekkHolder;
