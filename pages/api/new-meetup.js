import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await new MongoClient(process.env.MONGO_URI);
    client.connect();
    const db = client.db();
    db.collection("meetups").insertOne(data);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
