import { useRouter } from 'next/router';
import NewMeetupForm  from '../../components/visitedPlaces/NewVisitPlaceForm';

const NewPlace = () => {
    useRouter();
    const route = useRouter();
    const addNewPlaceHandler = async(newPlaceData: any) => {
        const response = await fetch('/api/new-visitplace', {
            method: 'POST',
            body: JSON.stringify(newPlaceData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        route.push('/');
    }
    return <NewMeetupForm onAddMeetup = {addNewPlaceHandler}/>
}

export default NewPlace;