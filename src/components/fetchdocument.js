// const { MongoClient } = require('mongodb');
// const uri = 'mongodb+srv://batravansh162:2r0AEX0oxgQ2JMpz@cluster0.hnplbfa.mongodb.net/?retryWrites=true&w=majority';

// async function fetchDocuments() {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const db = client.db('Fiesta');
//     const collection = db.collection('Anniversary_Venue');
//     const documents = await collection.find().toArray();
//     return documents;
//   } catch (error) {
//     console.error('Error fetching documents:', error);
//   } finally {
//     await client.close();
//   }
// }

// module.exports = fetchDocuments;