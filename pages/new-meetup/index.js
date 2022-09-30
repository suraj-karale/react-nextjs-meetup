import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";

const NewMeetupPage = () => {
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch("api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };

  return (
    <Layout>
      <h2>Add New Meetup</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Layout>
  );
};

export default NewMeetupPage;
