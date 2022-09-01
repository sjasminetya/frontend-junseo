import React from "react";
import { Button } from "../../components/elements";
import DefaultLayouts from "../../components/layouts/DefaultLayouts";
import Footer from "../../components/layouts/Footer";
import Jumbotron from "../../components/layouts/Jumbotron";
import { ICONS, IMAGES } from "../../configs";
import styles from "./styles.module.css";

const Home = () => {
  const renderNewArrival = (image: string, title: string) => {
    return (
      <div className="mx-10">
        <img alt={title} className={styles["image-arrival"]} src={image} />
        <p className="text-lg font-medium text-black text-center mt-4">{title}</p>
      </div>
    );
  };

  const renderCategory = (image: string, title: string) => {
    return (
      <div className="mx-12 relative">
        <img alt={title} className={styles["image-category"]} src={image} />
        <p className="text-5xl font-bold text-white absolute bottom-0 right-0 left-0 text-center mb-1">{title}</p>
      </div>
    );
  };

  return (
    <DefaultLayouts>
      <Jumbotron />
      <div className="pt-52 px-28">
        <h1 className={["text-center", styles.title].join(" ")}>New Arrival in This Week</h1>
        <div className="mt-11 flex justify-center items-center">
          {renderNewArrival(IMAGES.IMGARRIVAL1, "Flowly Square Dress")}
          {renderNewArrival(IMAGES.IMGARRIVAL2, "Sweater Red Crop")}
          {renderNewArrival(IMAGES.IMGARRIVAL3, "Double breasted blazer")}
          {renderNewArrival(IMAGES.IMGARRIVAL1, "Flowly Square Dress")}
        </div>
        <div className={["flex justify-end mt-10", styles["view-more"]].join(" ")}>
          <p className="mr-5 font-normal text-lg">View More</p>
          <img alt="arrow right" src={ICONS.ARROWRIGHTGRAY} />
        </div>
        <div className="mt-28 flex justify-center items-center">
          {renderCategory(IMAGES.CATEGORYMAN, "MEN")}
          {renderCategory(IMAGES.CATEGORYWOMEN, "WOMEN")}
          {renderCategory(IMAGES.CATEGORYKIDS, "KIDS")}
        </div>
        <div className={["grid grid-cols-3 gap-4 mt-44", styles.blog].join(" ")}>
          <div>
            <h6 className="font-semibold text-4xl">Blog</h6>
            <h1 className="text-black font-bold mt-12 mb-7">How to mix and match your clothes correctly</h1>
            <p className="text-xl font-normal">Matching clothes goes beyond looking nice.</p>
            <p className="text-xl font-normal">It affects how you feel and your confidence. When you</p>
            <p className="text-xl font-normal">confidently put together an outfit and intentionally</p>
            <p className="text-xl font-normal">matched different pieces, you’ll feel great wearing it.</p>
            <div className={["flex mt-20", styles["view-more"]].join(" ")}>
              <p className="mr-5 font-normal text-lg">View More</p>
              <img alt="arrow right" src={ICONS.ARROWRIGHTGRAY} />
            </div>
          </div>
          <div className="col-span-2 flex justify-end">
            <img alt="blog" className={styles["img-blog"]} src={IMAGES.IMGBLOG} />
          </div>
        </div>
        <div className={["mt-28", styles.popular].join(" ")}>
          <h1 className={["text-center", styles.title].join(" ")}>Most Popular</h1>
          <div className="grid grid-cols-3 gap-4 mt-11">
            <img alt="popular" className="h-full w-full" src={IMAGES.POPULAR1} />
            <img alt="popular" className="h-full w-full" src={IMAGES.POPULAR2} />
            <img alt="popular" className="h-full w-full" src={IMAGES.POPULAR3} />
            <img alt="popular" className="h-full w-full" src={IMAGES.POPULAR4} />
            <img alt="popular" className="h-full w-full" src={IMAGES.POPULAR5} />
            <img alt="popular" className="h-full w-full" src={IMAGES.POPULAR6} />
          </div>
          <div className={["flex justify-end mt-10", styles["view-more"]].join(" ")}>
            <p className="mr-5 font-normal text-lg">View More</p>
            <img alt="arrow right" src={ICONS.ARROWRIGHTGRAY} />
          </div>
        </div>
        <div className={["grid grid-cols-3 gap-4 mt-24 mb-24", styles.newsletter].join(" ")}>
          <h1 className="text-black font-semibold">Sign up to accept a 50% discount and free shipping on your first order only at Junseo Store.</h1>
          <div className="flex justify-end col-span-2">
            <input className={styles["input-newsletter"]} placeholder="Enter your email here..." type="text" />
            <Button className={styles["btn-signup"]} radius="0" type="Button">
              <span className={["flex justify-center content-center font-medium text-sm", styles["btn-text"]].join(" ")}>Sign up</span>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </DefaultLayouts>
  );
};

export default Home;
