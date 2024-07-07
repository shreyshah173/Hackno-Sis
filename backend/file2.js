const axios = require('axios');

// Generate random data
const randomTopics = [
  { index: 1, topicname: 'Topic One', userid: '6680f18899f8be54e76893c3' },
  { index: 2, topicname: 'Topic Two', userid: '6680f18899f8be54e76893c3' },
  { index: 3, topicname: 'Topic Three', userid: '6680f18899f8be54e76893c3'},
  { index: 4, topicname: 'Topic Four', userid: '6680f18899f8be54e76893c3' },
  { index: 5, topicname: 'Topic Five', userid: '6680f18899f8be54e76893c3' },
];

const insertData = async () => {
  try {
    for (let topic of randomTopics) {
      const response = await axios.post('http://localhost:5000/api/topics', topic);
      // console.log(`Inserted topic: ${response.data.topicname}`);
    }
    // console.log('All topics inserted successfully!');
  } catch (error) {
    console.error('Error inserting topics:', error.message);
  }
};

insertData();
