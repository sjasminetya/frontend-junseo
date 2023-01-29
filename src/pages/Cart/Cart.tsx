/* eslint-disable react/jsx-max-depth */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Button } from "../../components/elements";
import DefaultLayouts from "../../components/layouts/DefaultLayouts";
import { ICONS, IMAGES } from "../../configs";
import { RouterPath } from "../../routes";
import styles from "./styles.module.css";

const Cart = () => {
  const navidate = useNavigate();
  const renderNewArrival = (image: string, title: string) => {
    return (
      <div className="mx-10 cursor-pointer">
        <img alt={title} className={styles["image-arrival"]} src={image} />
      </div>
    );
  };

  const renderCart = (image: string, title: string, price: string, type: string) => {
    return (
      <div className={["flex justify-between mt-9 mb-5", styles["cart-content"]].join(" ")}>
        <div className="flex">
          <img alt="image product" src={image} />
          <div className="ml-4 flex flex-col justify-between">
            <div>
              <Breadcrumb crumb={["Junseo", type]} />
              <p className="text-xs">{title}</p>
              <p className="font-semibold text-sm pt-3">USD ${price}</p>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <p className="text-xs">Colour <b>CREAM</b></p>
                <p className="text-xs">Size <b>Small (S)</b></p>
                <p className="text-xs">Quantity <b>1</b></p>
              </div>
            </div>
            <input name="checkbox" type="checkbox" />
          </div>
        </div>
        <div className="flex">
          <Button className={styles["btn-edit"]} radius="0" type="Button">
            Edit Cart
          </Button>
          <Button className={styles["btn-remove"]} radius="0" type="Button">
            Remove
          </Button>
        </div>
      </div>
    );
  };

  return (
    <DefaultLayouts>
      <div className="grid grid-cols-3 gap-4 py-20">
        <div className={["col-span-2 px-24", styles["cart-body"]].join(" ")}>
          <h1 className={styles["title-product"]}>Your Shopping Cart</h1>
          <hr className="mt-4" />
          {renderCart(IMAGES.WOMANCLOTHES5, "Double breated blazer", "448", "Blazer")}
          {renderCart(IMAGES.CART1, "Varsity jogger", "47.95", "Trousers")}
          {renderCart(IMAGES.CART2, "Halterneck Occasion Midi Dress", "388", "Dresses")}
        </div>
        <div className="px-24">
          <h1 className={styles["title-product"]}>Order Summary</h1>
          <hr className="mt-4" />
          <div className={["mt-9 flex justify-between items-center cursor-pointer", styles["info-product"]].join(" ")}>
            <p className="font-light text-xs">Item Subtotal</p>
            <h4 className="font-normal text-sm">$448</h4>
          </div>
          <div className={["mt-3 flex justify-between items-center cursor-pointer", styles["info-product"]].join(" ")}>
            <p className="font-medium text-xs">Estimated total</p>
            <h4 className="font-semibold text-lg">$448</h4>
          </div>
          <div className={["mt-3 grid grid-cols-2 items-center cursor-pointer", styles["info-product"]].join(" ")}>
            <div className="flex items-center">
              <img alt="icon gift" src={ICONS.GIFT} />
              <p className="font-medium text-xs ml-4">You get a free gift!</p>
            </div>
            <Button className={[styles["btn-buy"]].join(" ")} radius="0" type="Button">
              CHOOSE YOUR GIFT
            </Button>
          </div>
          <div className="flex mt-5">
            <input className={styles["input-coupon"]} placeholder="Enter your coupon here" type="text" />
            <Button className={styles["btn-buy"]} radius="0" type="Button">
              APPLY
            </Button>
          </div>
          <Button className={["mt-5", styles["btn-buy"]].join(" ")} onClick={() => navidate(RouterPath.CHECKOUT)} radius="0" type="Button">
            CHECKOUT
          </Button>
        </div>
      </div>
      <div className={["mb-24", styles["product-list"]].join(" ")}>
        <h1 className="text-center text-2xl font-semibold">Recently Viewed</h1>
        <div className="mt-11 flex justify-center items-center">
          {renderNewArrival(IMAGES.WOMANCLOTHES1, "Flowly Square Dress")}
          {renderNewArrival(IMAGES.WOMANCLOTHES2, "Sweater Red Crop")}
          {renderNewArrival(IMAGES.WOMANCLOTHES3, "Double breasted blazer")}
          {renderNewArrival(IMAGES.WOMANCLOTHES4, "Flowly Square Dress")}
        </div>
      </div>
    </DefaultLayouts>
  );
};

export default Cart;
