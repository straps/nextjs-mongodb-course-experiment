import { MongoClient } from 'mongodb';

const NewMeetupAPI = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://fstrappini:software@cluster0.jpcm9kt.mongodb.net/?retryWrites=true&w=majority'
      );
      console.log('connect');
      const db = client.db('meetups');
      const collection = db.collection('meetups');

      const result = await collection.insertOne(data);
      console.log('result', result);

      client.close();

      res.status(201).json({ err: null, data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: err.message });
    }
  }
};

export default NewMeetupAPI;
