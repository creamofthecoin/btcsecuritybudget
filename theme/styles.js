const bgBoilerPlate = {
  content: '""',
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  opacity: "0.1",
  zIndex: "-1",
  height: "100vh",
};

const styles = {
  body: {
    flexGrow: 1,
    // _before: {
    //   backgroundImage: "url(/memes/bad/sadness.gif)",
    //   ...bgBoilerPlate,
    //   transitionDuration: "0.5s",
    // },
    // _after: {
    //   backgroundImage: "url(/memes/good/saylor.gif)",
    //   ...bgBoilerPlate,
    //   transitionDuration: "0.5s",
    // },
    scrollbarWidth: "thin",
    scrollbarColor: "gray.300 transparent",
    scrollbarHeight: "thin",
  },
  html: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
  "h1, h2, h3, h4, h5": {
    padding: "1em 0 0 0",
  },
  "h1:first-of-type, h2:first-of-type, h3:first-of-type, h4:first-of-type, h5:first-of-type":
    {
      padding: "0",
    },

  p: {
    padding: "0 0 1em 0",
  },
  "p:last-child": {
    padding: "0",
  },
};

export default styles;
