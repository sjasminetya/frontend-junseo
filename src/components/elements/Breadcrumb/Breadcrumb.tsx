import React from "react";
import styles from "./styles.module.css";

type Props = {
  crumb: string[]
}

const Breadcrumb: React.FC<Props> = (props) => {

  const lastItem = (index: number) => {
    return index === props.crumb.length - 1;
  };

  return (
    <ul className={styles.breadcrumb}>
      {props.crumb.map((val, index) => (
        <li className={[lastItem(index) ? styles["active-breadcrumb"] : ""].join(" ")} key={index}>
          <a href="">{val}</a>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
