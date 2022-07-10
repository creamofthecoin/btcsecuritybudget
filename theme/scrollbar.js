const scrollbar = {
  ".js-focus-visible :focus:not([data-focus-visible-added])": {
    outline: "none",
    boxShadow: "none",
  },
  "body::-webkit-scrollbar": {
    width: "0.5rem",
    height: "0.5rem",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  "body *::-webkit-scrollbar": {
    width: "0.5rem",
    height: "0.5rem",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  "body *": {
    scrollbarWidth: "thin",
    scrollbarHeight: "thin",
    scrollbarColor: "gray.500 transparent",
  },
  "::-webkit-scrollbar-corner": {
    background: "rgba(0, 0, 0, 0)",
  },
  "body::-webkit-scrollbar-track": {
    background: "rgba(0, 0, 0, 0)",
  },
  "body *::-webkit-scrollbar-track": {
    background: "rgba(0, 0, 0, 0)",
  },
  "body::-webkit-scrollbar-thumb": {
    backgroundColor: "gray.500",
    border: "1px solid transparent",
    borderRadius: "0.5rem",
  },
  "body *::-webkit-scrollbar-thumb": {
    backgroundColor: "gray.500",
    border: "1px solid transparent",
    borderRadius: "0.5rem",
  },
};

export default scrollbar;
