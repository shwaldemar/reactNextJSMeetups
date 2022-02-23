//our-domain/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

function NewMeetupPage(props) {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch(`/api/new-meetup`, {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    console.log(data);
    router.push("/"); //redirects to home on completion
  }

  return (
    <Fragment>
      <Head>
        <title>React Meetups - Add a new meetup</title>
        <meta name="description" content="Add your own meetups." />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
export default NewMeetupPage;
