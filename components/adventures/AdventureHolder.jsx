"use client";

import React from "react";
import BasicHolder from "../reusables/holder/BasicHolder";
import CardBook from "../reusables/cards/CardBook";

const AdventureHolder = ({ children }) => {
  return (
    <BasicHolder
    service="adventures"
      className=""
      url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=adventures&page=:page`}
      Card={CardBook}
    >
      {children}
    </BasicHolder>
  );
};

export default AdventureHolder;
