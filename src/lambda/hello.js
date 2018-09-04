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

var iplocation = require("iplocation");

exports.handler = async (event, context) => {
  return iplocation("56.70.97.8")
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify({
        headers: event.headers,
        msg: `${data}`
      })
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
