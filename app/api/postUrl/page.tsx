import { MongoClient } from "mongodb";
import { redirect } from "next/navigation";

type Props = {
  params:{},
  searchParams: {[key:string]: string | string[] | undefined},
}


export default function page(props: Props) {
  const mongoClient = new MongoClient('mongodb+srv://buati2323:12872563b@cluster0.joggabu.mongodb.net/urlShort?retryWrites=true&w=majority');
  mongoClient.db().collection("urls").insertOne({short: props.searchParams.shorturl, url: props.searchParams.url});
  redirect(`/?short=${props.searchParams.shorturl}`)
}
