import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/elements";
import { IMAGES } from "../../configs";
import { RouterPath } from "../../routes";
import styles from "./styles.module.css";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className={["w-full flex flex-col justify-center items-center", styles.success].join(" ")}>
      <img alt="success" src={IMAGES.SUCCESS} />
      <h6 className="mt-11">Order Was Successful!</h6>
      <p>Thank you for your order. We'll contact you when your order is on its way.</p>
      <div className="grid grid-cols-2 gap-2 mt-12">
        <Button className={styles["btn-check"]} onClick={() => navigate(RouterPath.HOME)} radius="0" type="Button">
          CHECK YOUR ORDER
        </Button>
        <Button className={styles["btn-home"]} onClick={() => navigate(RouterPath.HOME)} radius="0" type="Button">
          BACK TO HOME
        </Button>
      </div>
    </div>
  );
};

export default Success;
