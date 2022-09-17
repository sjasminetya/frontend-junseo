import React from "react";
import { Breadcrumb, Button } from "../../components/elements";
import DefaultLayouts from "../../components/layouts/DefaultLayouts";
import { ICONS, IMAGES } from "../../configs";
import styles from "./styles.module.css";

const Product = () => {

  const renderNewArrival = (image: string, title: string) => {
    return (
      <div className="mx-10 cursor-pointer">
        <img alt={title} className={styles["image-arrival"]} src={image} />
      </div>
    );
  };

  return (
    <DefaultLayouts>
      <div className="grid grid-cols-3 gap-4 px-28 py-20">
        <div className="col-span-2 flex justify-center">
          <img alt="women" className={styles["image-product"]} src={IMAGES.WOMANCLOTHES4} />
        </div>
        <div>
          <Breadcrumb crumb={["HOME", "WOMEN", "FORMALWEAR", "BLAZER", "DOUBLE BREASTED BLAZER"]} />
          <h1 className={styles["title-product"]}>Double breasted blazer</h1>
          <div className="flex items-center mt-7">
            <h3 className={styles["product-price"]}>USD 448</h3>
            <h4 className={["line-through pl-4 pr-1", styles["price-before-discount"]].join(" ")}>USD 640</h4>
            <h4 className={styles["text-discount"]}>30% OFF & FREE SHIPPING</h4>
          </div>
          <div className={["mt-5 w-64 h-auto px-9 py-3", styles["product-info-discount"]].join(" ")}>
            <p>Hurry Up, Time Is Running Out</p>
            <p>USE CODE: <b>AUDE0804</b></p>
            <p className="font-semibold">Up to 50% off for all shirt & blouse</p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <h6 className={styles["important-info"]}>*It is important to check the size of the clothes before purchasing it.</h6>
            <p className="underline text-xs">Size Guide</p>
          </div>
          <div className={["mt-3 flex justify-between items-center cursor-pointer", styles["info-product"]].join(" ")}>
            <p>Size</p>
            <img alt="arrow down" src={ICONS.ARROWRDOWN} />
          </div>
          <div className={["mt-3 flex justify-between items-center cursor-pointer", styles["info-product"]].join(" ")}>
            <p>Colour</p>
            <img alt="arrow down" src={ICONS.ARROWRDOWN} />
          </div>
          <div className={["mt-3 flex justify-between items-center cursor-pointer", styles["info-product"]].join(" ")}>
            <p>Quantity</p>
            <img alt="arrow down" src={ICONS.ARROWRDOWN} />
          </div>
          <div className="flex justify-between items-center">
            <Button className={["mt-5", styles["btn-cart"]].join(" ")} radius="0" type="Button">
              Add To Cart
            </Button>
            <Button className={["mt-5 flex justify-center items-center", styles["btn-star"]].join(" ")} radius="0" type="Button">
              <img alt="icon star" src={ICONS.STARBLACK} />
            </Button>
          </div>
          <Button className={["mt-5", styles["btn-buy"]].join(" ")} radius="0" type="Button">
            BUY
          </Button>
          <div className="flex items-center justify-center mt-9 gap-8">
            <p className="text-xs font-medium">PRODUCT DESCRIPTION</p>
            <p className="text-xs font-medium">REVIEW</p>
          </div>
        </div>
      </div>
      <div className={["mt-20 mb-24", styles["product-list"]].join(" ")}>
        <h1 className="text-center text-2xl font-semibold">You May Also Like</h1>
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

export default Product;
