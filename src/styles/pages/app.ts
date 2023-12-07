import { styled } from "..";

export const HeaderContainer = styled("header", {
  backgroundColor: "$Yellow",
});

export const MainContent = styled("main", {
  alignItems: "center",
  backgroundColor: "$DarkGray",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const SearchBarWrapper = styled("div", {
  display: "flex",
  marginBottom: "24px",
});

export const ResultListWrapper = styled("div", {});

export const Image = styled("img", {
  display: "flex",
  height: "200px",
  justifyContent: "center",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
  width: "250px",
});

export const Button = styled("button", {
  "&:hover": {
    background: "$YellowLight",
  },
  backgroundColor: "$Yellow",
  boxShadow: "0 0 0 transparent",
  cursor: "pointer",
  fontFamily: "sans-serif",
  fontWeight: "bold",
  height: "90px",
  marginRight: "5px",
  marginTop: "0 auto",
  transition: "0.4s",
  width: "90px",
});
export const ButtonAdd = styled("button", {
  "&:hover": {
    background: "$YellowLight",
  },
  backgroundColor: "$Yellow",
  borderRadius: "5px",
  boxShadow: "0 0 0 transparent",
  cursor: "pointer",
  fontFamily: "sans-serif",
  fontWeight: "bold",
  height: "90px",
  marginLeft: "80%",
  marginTop: "0 auto",
  transition: "0.4s",
  width: "90px",
});

export const MagnifyingGlassIcon = styled("div", {
  marginRight: "15px",
});
export const SwitchIcon = styled("div", {
  display: "flex",
  height: "2rem",
  margin: "0 auto",
  marginTop: "auto",
  padding: "2rem",
  textAlign: "center",
});

export const SearchButton = styled("button", {
  "&:hover": {
    background: "$DarkGray",
  },
  alignItems: "center",
  backgroundColor: "$White",
  borderRadius: "5px",
  display: "flex",
  fontFamily: "sans-serif",
  fontSize: "inherit",
  fontWeight: "bold",
  height: "30px",
  justifyContent: "center",
  position: "relative",
  textAlign: "center",
  transition: "0.5s",
  width: "100px",
});

export const Input = styled("input", {
  border: "none",
  borderRadius: "5px",
  height: "30px",
  marginRight: "8px",
  paddingLeft: "12px",
  width: "350px",
});
