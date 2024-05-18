"use client";
import "@tamagui/core/reset.css";

import "@tamagui/polyfill-dev";
import { ReactNode } from "react";

import { StyleSheet } from "react-native";

import { useServerInsertedHTML } from "next/navigation";

import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";

import { TamaguiProvider } from "tamagui";

import tamaguiConfig from "./tamagui.config";
export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useRootTheme();
  useServerInsertedHTML(() => {
    // @ts-ignore

    const rnwStyle = StyleSheet.getSheet();

    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />

        <style
          dangerouslySetInnerHTML={{
            __html: tamaguiConfig.getCSS({
              // if you are using "outputCSS" option, you should use this "exclude"
              // if not, then you can leave the option out
              exclude:
                process.env.NODE_ENV === "production" ? "design-system" : null,
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            // avoid flash of entered elements before enter animations run:
            __html: `document.documentElement.classList.add('t_unmounted')`,
          }}
        />
      </>
    );
  });
  return (
    <NextThemeProvider
      skipNextHead
      onChangeTheme={(next) => {
        setTheme(next as any);
      }}
    >
      <TamaguiProvider
        config={tamaguiConfig}
        themeClassNameOnRoot
        defaultTheme={theme}
      >
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
};
