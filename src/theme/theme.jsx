const theme = {
  fontSizes: {
    xs: "1.2rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "2rem",
    xl: "2.4rem",
  },
  defaultRadius: "md",
  components: {
    Title: {
      variants: {
        secondaryHeading: () => ({
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

    Anchor: {
      styles: {
        root: {},
      },
    },
  },
};

export default theme;
