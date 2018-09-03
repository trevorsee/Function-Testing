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

import fetch from "node-fetch";

const API_ENDPOINT =
  "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";

exports.handler = async (event, context) => {
  console.log("test");
  console.log(API_ENDPOINT);
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify({
        headers: event.headers,
        msg: `${data.setup} ${data.punchline} *BA DUM TSSS*`
      })
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
