import React from "react";
import { ICONS } from "../../../configs";
import { Button } from "../../elements";
import styles from "./styles.module.css";

const Footer = () => {
  const renderIcon = (icon: string) => {
    return (
      <Button className={styles["btn-icon"]} radius="0" type="Button">
        <img alt="icon social media" src={icon} />
      </Button>
    );
  };
  return (
    <footer className={["absolute bottom-0 w-full flex flex-col justify-between", styles.footer].join(" ")}>
      <div className="px-24 pt-14">
        <div className="grid grid-cols-4 gap-5">
          <h1 className="text-white font-bold text-4xl">JUNSEO</h1>
          <div>
            <h6>Our Service</h6>
            <ul>
              <li>Payment</li>
              <li>Shipment</li>
              <li>Exchange and Return</li>
              <li>About Discounts</li>
              <li>About Shipping</li>
            </ul>
          </div>
          <div>
            <h6>Help</h6>
            <ul>
              <li>Costumer Service</li>
              <li>Store Location</li>
              <li>Account Security</li>
              <li>Report Account</li>
              <li>Report Order</li>
            </ul>
          </div>
          <div>
            <h6>Social Media</h6>
            <div className="flex">
              {renderIcon(ICONS.FACEBOOK)}
              {renderIcon(ICONS.INSTAGRAM)}
              {renderIcon(ICONS.TWITTER)}
              {renderIcon(ICONS.PINTEREST)}
            </div>
            <ul>
              <li>Address: Magelang, Jawa Tengah</li>
              <li>Phone: +62 851-5660-2902</li>
              <li>Email: dev.shaula@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["border-bottom"]} />
    </footer>
  );
};

export default Footer;
