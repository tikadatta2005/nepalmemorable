"use client";

import React from "react";
import BasicHolder from "../reusables/holder/BasicHolder";
import CardBook from "../reusables/cards/CardBook";

const TrekkHolder = ({ children, type, slug, sort }) => {
  return (
    <BasicHolder
      service={`trekking${slug || ""}`}
      className=""
      url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=${type}&page=:page&len=20&sort=${sort}&search_key=folder_id&search_val=${slug.slice(1) || ""}`}
      Card={CardBook}
      initial={1}
    >
      {children}
    </BasicHolder>
  );
};

export default TrekkHolder;
