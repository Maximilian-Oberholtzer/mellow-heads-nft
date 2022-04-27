import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";
import useStyles from "./Styles";
import CollectionGrid from "./CollectionGrid";
import { Button } from "@material-ui/core";
import * as Scroll from "react-scroll";

function Collection(props) {
  const classes = useStyles();
  const [scrollTopView, setScrollTopView] = useState(false);

  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  const listenScroll = () => {
    if (window.pageYOffset < 300) {
      if (!scrollTopView) {
        setScrollTopView(false);
      }
    } else {
      if (!scrollTopView) {
        setScrollTopView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  }, []);

  return (
    <div className={classes.collectionContainer}>
      <Button
        onClick={scrollToTop}
        className={
          scrollTopView ? classes.scrollTopVisible : classes.scrollTopHidden
        }
      >
        TOP
      </Button>
      <Welcome blockchain={props.blockchain} data={props.data} />
      <CollectionGrid blockchain={props.blockchain} data={props.data} />
    </div>
  );
}

export default Collection;
