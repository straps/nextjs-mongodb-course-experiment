import { MongoClient } from "mongodb";
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const Index = (props) => {
  console.log("Running Index");

  return <MeetupList meetups={props.meetups} />;
};

//Questo codice gira sul server ed è gestito da Nextjs solo per i componenti in "pages"
export const getStaticProps = async (context) => {
  console.log("Running getStaticProps");
  const client = await MongoClient.connect(process.env.REACT_APP_MONGODB_CONN);
  const db = client.db("meetups");
  const collection = db.collection("meetups");

  const result = await collection.find().toArray();

  client.close();

  return {
    props: {
      meetups: result.map((r) => {
        r.id = r._id.toString();
        delete r._id;
        return r;
      }),
    },
    revalidate: 600,
  };
};

export default Index;
