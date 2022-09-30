import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupIdPage = (props) => {
  return (
    <MeetupDetails
      title={props.meetUpData.title}
      image={props.meetUpData.image}
      address={props.meetUpData.address}
      description={props.meetUpData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await new MongoClient(process.env.MONGO_URI);
  client.connect();
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const client = await new MongoClient(process.env.MONGO_URI);
  client.connect();
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const selectedMeetup = await meetupCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetUpData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupIdPage;
