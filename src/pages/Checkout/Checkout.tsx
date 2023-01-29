/* eslint-disable react/jsx-max-depth */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "../../components/elements";
import DefaultLayouts from "../../components/layouts/DefaultLayouts";
import { ICONS, IMAGES } from "../../configs";
import { RouterPath } from "../../routes";
import styles from "./styles.module.css";

const Checkout = () => {
  const navigate = useNavigate();
  const renderInput = (label: string, type: "text" | "textarea") => {
    return <Text inputClassName={["mb-9", type === "text" ? "h-8" : ""].join(" ")} label={label} type={type} />;
  };

  return (
    <DefaultLayouts>
      <div className="grid grid-cols-3 gap-4 py-20">
        <div className={["col-span-2 px-24", styles["cart-body"]].join(" ")}>
          <h1 className={styles["title-product"]}>Checkout</h1>
          <hr className="mt-4" />
          <div className="grid grid-cols-2 gap-3 mt-9">
            {renderInput("First Name", "text")}
            {renderInput("Last Name", "text")}
            {renderInput("Country", "text")}
            {renderInput("City", "text")}
            {renderInput("Postal Code", "text")}
            {renderInput("Phone", "text")}
          </div>
          {renderInput("Address", "textarea")}
          <h1 className={styles["title-product"]}>Shipping Option</h1>
          <hr className="mt-4" />
          <div className="flex items-center mt-9 mb-12">
            <div className={[styles["btn-like"], "flex items-center justify-center"].join(" ")}>
              <img alt="like" src={IMAGES.LIKE} />
            </div>
            <div>
              <h1>Congratulations, your order qualifies for free shipping.</h1>
              <p>For your order, you received medium shipping.</p>
              <a>EDIT SHIPPING OPTION</a>
            </div>
          </div>
          <h1 className={styles["title-product"]}>Payment Option</h1>
          <hr className="mt-4" />
          <div className="grid grid-cols-5 gap-3 mt-9">
            <img alt="visa" src={IMAGES.VISA} />
            <img alt="mastercard" src={IMAGES.MASTERCARD} />
            <img alt="paypal" src={IMAGES.PAYPAL} />
            <img alt="american express" src={IMAGES.AMERICANEXPRESS} />
            <Button className={styles["btn-cod"]} radius="0" type="Button">
              COD
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-16">
            <Button className={styles["btn-back-to-cart"]} onClick={() => navigate(RouterPath.CART)} radius="0" type="Button">
              BACK TO CART
            </Button>
            <Button className={styles["btn-confirm"]} onClick={() => navigate(RouterPath.SUCCESS)} radius="0" type="Button">
              CONFIRM YOUR ORDER
            </Button>
          </div>
        </div>
        <div className="px-24">
          <h1 className={styles["title-product"]}>Your Item</h1>
          <hr className="mt-4" />
          <div className={["mt-9 cursor-pointer", styles["info-product"]].join(" ")}>
            <div className="flex justify-between items-center">
              <p className="font-light text-xs">Item Subtotal</p>
              <h4 className="font-normal text-sm">$448</h4>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="font-light text-xs">Cuopon</p>
              <h4 className="font-normal text-sm">-$15</h4>
            </div>
          </div>
          <div className={["mt-3 flex justify-between items-center cursor-pointer", styles["info-product"]].join(" ")}>
            <p className="font-medium text-xs">Estimated total</p>
            <h4 className="font-semibold text-lg">$433</h4>
          </div>
          <div className={["mt-3 flex cursor-pointer", styles["info-product"]].join(" ")}>
            <img alt="woman clothes" className={styles["img-product"]} src={IMAGES.WOMANCLOTHES5} />
            <div className="ml-6">
              <h6>Double breated blazer</h6>
              <div className="grid grid-cols-2 gap-2 mt-2 mb-1">
                <p className="font-normal" style={{ fontSize: "10px", color: "#000000" }}>Colour:</p>
                <p className="font-normal" style={{ fontSize: "10px", color: "#000000" }}>Cream</p>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-1">
                <p className="font-normal" style={{ fontSize: "10px", color: "#000000" }}>Size:</p>
                <p className="font-normal" style={{ fontSize: "10px", color: "#000000" }}>Small (s)</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <p className="font-normal" style={{ fontSize: "10px", color: "#000000" }}>Quantity:</p>
                <p className="font-normal" style={{ fontSize: "10px", color: "#000000" }}>1</p>
              </div>
              <h6 className="mt-2">You will receive your order on:</h6>
              <Button className={styles["btn-receive"]} radius="0" type="Button">
                27 May 2021
              </Button>
            </div>
          </div>
          <div className={["mt-3 cursor-pointer", styles["info-product"]].join(" ")} style={{ border: "none" }}>
            <div className="flex items-center">
              <img alt="icon gift" className={styles["gift-icon"]} src={ICONS.GIFT} />
              <p className="font-medium text-xs ml-4">Your Special Gift</p>
            </div>
            <div className="flex mt-4">
              <img alt="gift" className={styles["gift-image"]} src={IMAGES.GIFTIMAGE} />
              <div className="ml-4">
                <h6>Crystal heart earrings</h6>
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-normal" style={{ fontSize: "10px", color: "#000000" }}>Colour:</p>
                  <p className="font-normal" style={{ fontSize: "10px", color: "#000000" }}>Clear & Gold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayouts>
  );
};

export default Checkout;
