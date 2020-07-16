const getId = require('./utils/getId');
const axios = require('axios');

exports.handler = (event, context, callback) => {
  //const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
  //const segments = path.split('/').filter((e) => e);
  //const id = segments[1];
  const id = getId(event.path);
  // console.log('segments', segments);
  //413400573
  axios
    .get(`https://www.mofo.com/templates/content-people-api?cid=${id}`)
    .then((res) => {
      callback(null, {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: JSON.stringify(res.data),
      });
    })
    .catch((err) => {
      callback(err);
    });
};
