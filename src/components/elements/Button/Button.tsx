import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type ButtonProps = {
  className: string,
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  href?: string | any;
  isInternalLink?: boolean;
  type: "Link" | "Button" | "submit";
  isBlack?: boolean;
  isWhite?: boolean;
  radius: "4" | "10";
  isShadow?: boolean;
  qty?: number;
  check?: boolean;
  style?: any;
  children?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  const className = [props.className];
  const type = props.type === "submit" ? "submit" : "button";
  props.isBlack && className.push(styles["btn-black"]);
  props.isWhite && className.push(styles["btn-white"]);
  props.radius === "4" ? className.push(styles["radius-4"]) : className.push(styles["radius-10"]);
  props.isShadow && className.push("shadow-lg");

  const onClick = () => {
    props.onClick && props.onClick();
  };

  if (props.isDisabled) {
    props.isDisabled && className.push("disabled");
    return (
      <span
        className={className.join(" ")}
        onClick={onClick}
      >
        {props.children}
      </span>
    );
  }

  if (props.type === "Link") {
    if (props.isInternalLink) {
      return (
        <>
          <Link
            className={className.join(" ")}
            onClick={onClick}
            to={props.href}
          >
            {props.children}
          </Link>
        </>
      );
    } else {
      return (
        <>
          <a className={className.join(" ")} href={props.href} onClick={onClick} rel="noreferrer" target="_blank">{props.children}</a>
        </>
      );
    }
  }

  return (
    <button className={className.join(" ")} disabled={props.qty === 1 || props.check === false} onClick={onClick} style={props.style} type={type}>
      {
        props.isLoading ? (
          <span>Loading...</span>
        ) : (
          props.children
        )
      }
    </button>
  );
};

export default Button;
