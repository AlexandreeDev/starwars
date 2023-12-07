import { globalCss } from ".";
export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  a: {
    color: "$BlackText",
    padding: "2px",
    textDecoration: "none",
  },
  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$DarkGray",
    color: "$White",
  },
  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  h1: {
    display: "flex",
    margin: "0 auto",
  },
});
