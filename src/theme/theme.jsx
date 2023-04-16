const theme = {
  //typography
  fontFamily: "Oswald, Inter, sans-serif",
  fontSizes: {
    xs: "1.2rem",
    sm: "1.4rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.4rem",
  },

  defaultRadius: "md",

  components: {
    Title: {
      variants: {
        sectionHeading: () => ({
          root: {
            fontSize: "3rem",
            marginBottom: "4rem",
          },
        }),
        headingCard: () => ({
          root: {
            fontSize: "3rem",
            fontWeight: " 500",
          },
        }),
      },
    },

    Button: {
      root: {
        background: "green",
      },
    },
  },
};

export default theme;
