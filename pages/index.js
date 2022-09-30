import { MongoClient } from "mongodb";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import styles from "../styles/Home.module.css";

const HomePage = (props) => {
  return (
    <div className={styles.container}>
      <Layout>
        <MeetupList meetups={props.meetups} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const client = await new MongoClient(process.env.MONGO_URI);
  client.connect();
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          description: meetup.description,
          image: meetup.image,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 2,
  };
};

export default HomePage;
