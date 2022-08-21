import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();

  const addedMeetupHandler = async (data) => {
    console.log(data);

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();

    console.log(resData);

    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addedMeetupHandler} />;
};

export default NewMeetupPage;
