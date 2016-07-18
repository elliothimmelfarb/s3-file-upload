'use strict';

const fs = require('fs');
const aws = require('aws-sdk');

const s3 = new aws.S3();

// s3.createBucket({
//   Bucket: 'ElliotsNewBucket'
// }, (err, data) => {
//   console.log('err:', err);
//   console.log('data:', data);
// });

fs.readFile('./tiger.jpg', (err, data) => {
  if (err) throw err;
  s3.putObject({
    Bucket: 'ElliotsNewBucket',
    Key: 'tiger.jpg',
    Body: data,
    ACL: 'public-read'
  }, (err, data) => {
    console.log('err:', err);
    console.log('data:', data);
  });
});
