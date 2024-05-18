/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { ImgHTMLAttributes } from "react";

// use https://tamagui.dev/ui/image instead

export interface BaseImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const BaseImage = ({ ...props }: BaseImageProps) => {
  return <img {...props} />;
};

export default BaseImage;
