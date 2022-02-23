// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

const mdbpass = "oyZwL4USCc1X2nb8";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, description, address, image } = data;

    const client = await MongoClient.connect(
      `mongodb+srv://shwaldemar:${mdbpass}@reactnextjscluster0.c7ehc.mongodb.net/meetups?retryWrites=true&w=majority`
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
