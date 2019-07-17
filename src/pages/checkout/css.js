const Style = theme => ({
  root: {
    position: "relative",
    marginTop: "10px"
  },
  icon: {
    "&$activeIcon": {
      color: "black",
      "& text": {
        fill: "white"
      }
    },
    "&$completedIcon": {
      color: "black"
    }
  },
  activeIcon: {},
  completedIcon: {},
  step: {
    border: "5px solid black",
    padding: "10px",
    position: "relative"
  },
  step2: {
    border: "5px solid black",
    marginTop: "20px",
    padding: "10px",
    position: "relative"
  },
  step2Disabled: {
    border: "5px solid black",
    marginTop: "20px",
    padding: "10px",
    position: "relative",
    backgroundColor: "#DCDCDC"
  },
  titleStep: {
    fontFamily: "blader",
    color: "black",
    fontSize: "1.5em",
    borderBottom: "2px solid black"
  },
  cartItem: {
    width: "100%",
    height: "150px",
    backgroundColor: "#FBFCFC",
    borderBottom: "2px solid black"
  },
  cartItemImg: {
    height: "150px",
    width: "150px",
    borderRight: "1px solid black"
  },
  cartItemContent: {
    height: "100%",
    width: "calc(99% - 150px)",
    display: "inline-block",
    position: "relative",
    verticalAlign: "top"
  },
  cartItemTitle: {
    position: "absolute",
    left: 0,
    fontFamily: "fullpack",
    fontSize: "0.9em",
    textAlign: "left",
    padding: "10px"
  },
  cartItemPrice: {
    position: "absolute",
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    padding: "10px",
    fontSize: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6em"
    }
  },
  cartItemDelete: {
    position: "absolute",
    left: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    padding: "10px"
  },
  cartItemDeleteLogo: {
    minWidth: 0,
    padding: 0
  },
  cartItemDeleteIcon: {
    minWidth: 0,
    padding: 0
  },
  cartItemPricePrice: {
    fontSize: "1.2em",
    fontWeight: 900,
    letterSpacing: "3px",
    fontFamily: "fullpack"
  },
  totalPrice: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    fontFamily: "fullpack"
  },
  contentEmail: {
    fontFamily: "SourceCodePro",
    fontSize: "1em",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em"
    }
  },
  contentBill: {
    fontFamily: "SourceCodePro",
    fontSize: "1.2em",
    paddingBottom: "7px",
    lineHeight: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em"
    }
  },
  confirmationPrice: {
    fontFamily: "SourceCodePro",
    fontSize: "1.4em",
    fontWeight: "900"
  },
  itemConfirmation: {
    fontFamily: "SourceCodePro",
    fontSize: "1.1em",
    lineHeight: "17px",
    fontWeight: "lighter",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9em"
    }
  }
});

export default Style;
