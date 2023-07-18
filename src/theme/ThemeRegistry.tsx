"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    ticker: true;
    sm2: true;
    md2: true;
    lg2: true;
  }
}

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 12,
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#f2a900",
    },
    secondary: {
      main: "#111111",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      ticker: 500,
      sm: 600,
      sm2: 720,
      md: 900,
      md2: 990,
      lg: 1200,
      lg2: 1320,
      xl: 1536,
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
