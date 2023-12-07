import { createStitches } from "@stitches/react";

export const {
  config,
  css,
  styled,
  globalCss,
  theme,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      BlackText: "#000000",
      DarkGray: "#A9A9A9",
      LinearGradient: "(to right, #C0C0C0,#808080)",
      White: "#fff",
      Yellow: "#FFFF00",
      YellowLight: "#ffff6a",
    },
  },
});
