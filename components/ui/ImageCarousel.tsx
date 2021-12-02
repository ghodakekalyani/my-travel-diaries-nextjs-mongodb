import { useState } from "react";
import {UncontrolledCarousel} from "reactstrap";
import classes from "./ImageCarousel.module.css";

interface Iprops {
    items: string[];
}
const ImageCarousel = (props: Iprops) => {
    const newItems = props.items.map((item: string) => ({src: item}))
    return (
        <div className={classes.carouselImage}>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
          />
  
          <UncontrolledCarousel items={newItems} />
        </div>
      );
};

export default ImageCarousel;
