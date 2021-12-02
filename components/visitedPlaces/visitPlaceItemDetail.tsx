import React from "react";
import Card from "../ui/Card";
import ImageCarousel from "../ui/ImageCarousel";
import classes from "./VisitPlaceItem.module.css";
import { visitPlaceDetails } from "./VisitPlaceList";

function VisitPlaceItemDetail(props: any) {
  
  return (
    <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
      </div>
      <div className={classes.actions}>{props.discription}</div>
    </Card>
  );
}

export default VisitPlaceItemDetail;
