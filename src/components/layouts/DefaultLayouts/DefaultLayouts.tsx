import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode
}

const DefaultLayouts = (props: Props) => {
  return (
    <div className={styles["page-container"]}>
      <div className={styles["content-wrap"]}>
        <Header />
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayouts;
