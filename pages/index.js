import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import styles from "../styles/Home.module.css";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://image.shutterstock.com/image-vector/meetup-concept-illustration-young-people-260nw-571989925.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://thumbs.dreamstime.com/b/online-meetup-concept-vector-illustration-colleagues-business-meeting-company-internet-webcast-join-group-website-service-best-164294847.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <MeetupList meetups={DUMMY_MEETUPS} />
      </Layout>
    </div>
  );
};

export default HomePage;
