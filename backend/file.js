const axios = require('axios');

// Generate random data
const randomChats = [
  { message: 'Hello, how are you?', sentbyuser: true, created_at: new Date(), index: 1, userid: '6680f18899f8be54e76893c3' },
  { message: 'I am fine, thank you!', sentbyuser: false, created_at: new Date(), index: 1, userid: '6680f18899f8be54e76893c3' },
  { message: 'What are you doing?', sentbyuser: true, created_at: new Date(), index: 2, userid: '6680f18899f8be54e76893c3' },
  { message: 'Just working on a project.', sentbyuser: false, created_at: new Date(), index: 2, userid:'6680f18899f8be54e76893c3' },
  { message: 'Do you need any help?', sentbyuser: true, created_at: new Date(), index: 1, userid: '6680f18899f8be54e76893c3' },
  { message: 'Yes, that would be great!', sentbyuser: false, created_at: new Date(), index: 1, userid:'6680f18899f8be54e76893c3' },
  { message: 'Let me know what you need.', sentbyuser: true, created_at: new Date(), index: 2, userid: '6680f18899f8be54e76893c3' },
  { message: 'I will send you the details.', sentbyuser: false, created_at: new Date(), index: 2, userid:'6680f18899f8be54e76893c3' },
  { message: 'Thanks for your help!', sentbyuser: true, created_at: new Date(), index: 2, userid: '6680f18899f8be54e76893c3'},
  { message: 'You are welcome!', sentbyuser: false, created_at: new Date(), index: 2, userid: '6680f18899f8be54e76893c3' },
];

const insertData = async () => {
  try {
    for (let chat of randomChats) {
      const response = await axios.post('http://localhost:5000/api/chats', chat);
      // console.log(`Inserted chat: ${response.data.message}`);
    }
    // console.log('All chats inserted successfully!');
  } catch (error) {
    console.error('Error inserting chats:', error.message);
  }
};

insertData();
