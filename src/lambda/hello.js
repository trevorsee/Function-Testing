var geoip = require("geoip-lite");

export function handler(event, context, callback) {
  console.log(event);
  const ip = event.headers["client-ip"];
  // const geo = geoip.lookup(ip);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      headers: event.headers,
      ip: ip,
      geo: "geo",
      msg: "Hello, World!"
    })
  });
}
