import React from "react";
import Header from "../Header";

type Props = {
  children: React.ReactNode
}

const DefaultLayouts = (props: Props) => {
  return (
    <div className="relative">
      <Header />
      <div>{props.children}</div>
    </div>
  );
};

export default DefaultLayouts;
