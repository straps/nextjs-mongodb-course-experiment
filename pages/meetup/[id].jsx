import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = (props) => {
  return <MeetupDetails {...props.meetup} />;
};

export const getStaticPaths = async ({ params }) => {
  return {
    fallback: true,
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  return {
    props: {
      meetup: {
        id: id,
        title: 'First Meetup',
        image: 'https://officinebrand.it/wp-content/uploads/2018/06/meetup.jpg',
        address: 'Via D.Alighieri 9',
        description: 'This is a first meetup for my nextjs test',
      },
    },
  };
};

export default MeetupDetailsPage;
