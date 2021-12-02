import VisitPlaceItemDetail from '../../components/visitedPlaces/visitPlaceItemDetail';
import { useRouter } from 'next/router';
import { MongoClient, ObjectId } from 'mongodb';

const DetailPage = (props: any) => {
    const router = useRouter();
    const { visitPlaceId } = router.query;
    
    return <>
    <h1>The Detail Page</h1>
    <VisitPlaceItemDetail
        image = {props.selectedPlace.image}
        address = {props.selectedPlace.address}
        title = {props.selectedPlace.title}
        discription = {props.selectedPlace.description}
        />
    </>
}

export default DetailPage;


export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://kalyani:<password>@cluster0.2gfgh.mongodb.net/myVisitedPlaces?retryWrites=true&w=majority')
    const db = client.db();
    const visitplaceCollection = db.collection('visitplaces');
    const myVisitedPlaces = await visitplaceCollection.find({}, {projection: {_id: 1}}).toArray();
    client.close();
    return {
        fallback: true,
        paths: myVisitedPlaces.map((place:any) => ({ params: {visitPlaceId: place._id.toString()}}))
    }
}

export async function getStaticProps(context: any) {
    const placeId = new ObjectId(context.params.visitPlaceId);
    const client = await MongoClient.connect('mongodb+srv://kalyani:<password>@cluster0.2gfgh.mongodb.net/myVisitedPlaces?retryWrites=true&w=majority')
    const db = client.db();
    const visitplaceCollection = db.collection('visitplaces');
    const selectedPlace = await visitplaceCollection.findOne({_id: placeId});
    client.close();
    
    return {
        props: {
            selectedPlace: 
            {
                image: selectedPlace?.image,
                address: selectedPlace?.address,
                title: selectedPlace?.title,
                description: selectedPlace?.description,
                id: selectedPlace?._id.toString()
            }
        },
        revalidate: 1
    }
}