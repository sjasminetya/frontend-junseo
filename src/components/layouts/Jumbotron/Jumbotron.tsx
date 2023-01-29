import React from "react";
import { ICONS } from "../../../configs";
import { Button } from "../../elements";
import styles from "./styles.module.css";

const Jumbotron = () => {
  const renderBox = (icons: any, title: string, desc: string) => {
    return (
      <Button className="w-80 h-40" isShadow isWhite radius="10" type="Button">
        <div className="flex items-center">
          <div className="ml-4">
            <img alt={title} src={icons} />
          </div>
          <div className="pt-4 pl-3">
            <h6 className="text-2xl font-semibold text-black text-left">{title}</h6>
            <h6 className="text-xs text-semi-black text-left">{desc}</h6>
          </div>
        </div>
      </Button>
    );
  };
  return (
    <section className={["w-full flex flex-col items-center justify-center relative", styles.jumbotron].join(" ")}>
      <div className="grid grid-cols-2 gap-2 pl-28">
        <div>
          <h1>Discover a Wide Collection of Interesting Clothes in JUNSEO Store</h1>
          <p>Only at Junseo Store you can shop for your fashion needs wherever you are, at any time, in complete safety and comfort. Happy Shopping!</p>
          <Button className="border border-white w-64 h-14 mt-12" radius="10" type="Button">
            <span className={["flex justify-center content-center", styles["btn-text"]].join(" ")}>Shopping Now</span>
          </Button>
        </div>
      </div>
      <div className="flex justify-between absolute -bottom-16 left-28 right-28">
        {renderBox(ICONS.TRUCK, "Free Shipping", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")}
        {renderBox(ICONS.GIFT, "Cash On Delivery", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")}
        {renderBox(ICONS.SHOPPINGBAG, "Gift in every order", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")}
      </div>
    </section>
  );
};

export default Jumbotron;
