import { MongoClient } from "mongodb";
const handler = async(req: any, res: any) => {
    
    if(req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://kalyani:<password>@cluster0.2gfgh.mongodb.net/myVisitedPlaces?retryWrites=true&w=majority');
        const db = client.db();
        const visitPlacesCollection = db.collection('visitplaces');
        const result = await visitPlacesCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status('200').json({message: 'New place added successfully!'})
    }
}

export default handler;