import Card from '../ui/Card';
import classes from './VisitPlaceItem.module.css';
import { visitPlaceDetails } from './VisitPlaceList';
import { useRouter } from 'next/router';
import ImageCarousel from '../ui/ImageCarousel';

function VisitPlaceItem(props: visitPlaceDetails) {
  const route = useRouter();
  const showDetailHandler = () => {
    route.push(`/${props.id}`)
  }

  return (
    <li className={classes.item}>
      <Card>
      {/* {props.image.length > 1 ?
      <div className={classes.carouselimage}><ImageCarousel items={props.image}/></div> : */}
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default VisitPlaceItem;
