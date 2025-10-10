"use client";

import React from "react";
import BasicHolder from "../reusables/holder/BasicHolder";
import CardBook from "../reusables/cards/CardBook";

const CommunityHolder = ({ children }) => {
  return (
    <BasicHolder
    service="community-and-stay"
      className=""
      url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=community-and-stay&page=:page`}
      Card={CardBook}
    >
      {children}
    </BasicHolder>
  );
};

export default CommunityHolder;
