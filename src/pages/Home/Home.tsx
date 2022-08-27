import React from "react";
import DefaultLayouts from "../../components/layouts/DefaultLayouts";
import Jumbotron from "../../components/layouts/Jumbotron";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <DefaultLayouts>
      <Jumbotron />
      <div className="pt-52 px-28">
        <h1 className={["text-center", styles.title].join(" ")}>New Arrival in This Week</h1>
      </div>
    </DefaultLayouts>
  );
};

export default Home;
