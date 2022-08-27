import React from "react";
import Header from "../Header";

type Props = {
  children: React.ReactNode
}

const DefaultLayouts = (props: Props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  );
};

export default DefaultLayouts;
