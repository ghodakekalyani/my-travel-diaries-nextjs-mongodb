import { MongoClient } from "mongodb";
import MeetupList from "../components/visitedPlaces/VisitPlaceList";

const HomePage = (props: any) => {
    return <MeetupList visitPlaces={props.myVisitedPlaces}/>
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://kalyani<password>@cluster0.2gfgh.mongodb.net/myVisitedPlaces?retryWrites=true&w=majority')
    const db = client.db();
    const visitplaceCollection = db.collection('visitplaces');
    const myVisitedPlaces = await visitplaceCollection.find().toArray();
    client.close();
    return {
        props: {
            myVisitedPlaces: myVisitedPlaces.map(place => ({
                title: place.title,
                image: place.image,
                address: place.address,
                id: place._id.toString()
            }))
        },
        revalidate: 1
    }
} 
export default HomePage;