import { MongoClient } from 'mongodb';
import { redirect } from 'next/navigation';
import {FC} from 'react'

interface pageProps{
    params: {url:string}
}

const page: FC<pageProps> = async({params}) => {
    const mongoClient = new MongoClient('mongodb+srv://buati2323:12872563b@cluster0.joggabu.mongodb.net/urlShort?retryWrites=true&w=majority');
    let datab = await mongoClient.db().collection("urls").find().toArray() 
    redirect(datab.find(x => x.short == params.url).url)

}

export default page