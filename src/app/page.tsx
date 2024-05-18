"use client";

import { Button, Image } from "tamagui";
import BaseImage from "./components/BaseImage";

if (process.env.NODE_ENV === "production") {
  require("../public/tamagui.css");
}

export default function Home() {
  const images = [
    "DJI_20240425200310_0006_D.JPG",
    "DJI_20240428184022_0150_D.JPG",
    "DJI_20240428204803_0159_D.JPG",
    "DJI_20240428210021_0162_D.JPG",
    "DJI_20240425195521_0002_D.JPG",
    "DJI_20240428171513_0095_D.JPG",
    "DJI_20240428195628_0155_D.JPG",
    "DJI_20240428205253_0160_D.JPG",
    "DJI_20240502170013_0106_D.JPG",
  ];

  return (
    <main className={""}>
      {/* <Image
        source={{
          uri: "./images/DJI_20240425195217_0001_D.JPG",
          // width: "100%",
          // height: "100%",
        }}
        width={"full"}
        alt=""
      /> */}

      {images.map((image, index) => {
        return (
          <BaseImage
            key={index}
            src={`/images/${image}`}
            alt=""
            width={"100%"}
          />
        );
      })}
    </main>
  );
}
