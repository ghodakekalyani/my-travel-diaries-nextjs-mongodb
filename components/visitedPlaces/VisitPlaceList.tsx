import VisitPlaceItem from './VisitPlaceItem';
import classes from './VisitPlaceList.module.css';

export interface visitPlaceDetails {
  id: string;
  image: string;
  title: string;
  address: string;
  discription?: string;
}

export interface IAcceptableProps {
  visitPlaces: visitPlaceDetails[]
}

function VisitPlaceList(props: IAcceptableProps) {
  return (
    <ul className={classes.list}>
      {props.visitPlaces.map((visitPlace) => (
        <VisitPlaceItem
          key={visitPlace.id}
          id={visitPlace.id}
          image={visitPlace.image}
          title={visitPlace.title}
          address={visitPlace.address}
        />
      ))}
    </ul>
  );
}

export default VisitPlaceList;
