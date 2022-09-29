import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await new MongoClient(
      "mongodb+srv://suraj12345:suraj12345@cluster0.40gldu9.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    if (!client.isConnected()) client.connect();
    const db = client.db();
    const result = db.collection("meetups").insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
