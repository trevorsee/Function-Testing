// var geoip = require("geoip-lite");

// export function handler(event, context, callback) {
//   console.log(event);
//   const ip = event.headers["client-ip"];
//   const geo = geoip.lookup(ip);
//   console.log(geo);

//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({
//       headers: event.headers,
//       ip: ip,
//       geo: "geo",
//       msg: "Hello, World!"
//     })
//   });
// }

////////////////////////////////

// import fetch from "node-fetch";
// import geoip from "geoip-lite";

// const API_ENDPOINT =
//   "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";

// exports.handler = async (event, context) => {
//   //   const ip = event.headers["client-ip"];
//   //   const geo = geoip.lookup(ip);
//   return fetch(API_ENDPOINT)
//     .then(response => response.json())
//     .then(data => ({
//       statusCode: 200,
//       body: JSON.stringify({
//         headers: event.headers,
//         msg: `${data.setup} ${data.punchline} *BA DUM TSSS*`
//       })
//     }))
//     .catch(error => ({ statusCode: 422, body: String(error) }));
// };

const iplocation = require("iplocation");
const admin = require("firebase-admin");
const serviceAccount = require("./account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

exports.handler = async (event, context) => {
  return iplocation(event.headers["client-ip"])
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify({
        headers: event.headers,
        loc: data
      })
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
