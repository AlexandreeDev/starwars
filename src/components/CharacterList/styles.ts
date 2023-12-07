import { styled } from "../../styles";

export const MainContent = styled("div", {
  background: "$White",
  borderRadius: "16px",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.16)",
  color: "$BlackText",
  display: "flex",
  height: "420px",
  width: "500px",
});

export const ResultWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "16px",
});

export const HeaderContainer = styled("header", {
  backgroundColor: "$Yellow",
});

export const CharacterName = styled("div", {
  color: "$BlackText",
  display: "flex",
  fontFamily: "sans-serif",
  fontSize: "xx-large",
  padding: "32px",
});

export const BoxNamesBar = styled("div", {
  background: "$White",
  borderRadius: "16px",
  color: "$BlackText",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  marginTop: "3rem",
  minHeight: "0",
  padding: "16px",
  width: "500px",
});

export const FavoriteText = styled("div", {
  color: "$BlackText",
  display: "flex",
  flex: "0 0 50%",
  flexWrap: "wrap",
  fontFamily: "sans-serif",
  listStyleType: "none",
  margin: "0",
  minWidth: "0",
});

export const FilmesTag = styled("div", {
  fontWeight: "bold",
  height: "auto",
  whiteSpace: "pre-line",
  width: "auto",
});

export const Gender = styled("h2", {
  fontFamily: "sans-serif",
  margin: "8px",
});

export const Birth = styled("h2", {
  fontFamily: "sans-serif",
  margin: "8px",
});

export const Characterh1 = styled("h1", {
  alignItems: "center",
  fontFamily: "sans-serif",
  margin: "0 auto",
});
