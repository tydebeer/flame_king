import { functions } from "../config/firebase";

exports.myFunction = functions.https.onRequest((request, response) => {
  console.log('My Firebase Cloud Function was triggered!');
  response.send('Hello from Firebase Cloud Functions!');
});