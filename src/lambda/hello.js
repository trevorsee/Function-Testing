export function handler(event, context, callback) {
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      headers: event.headers,
      msg: "Hello, World!"
    })
  });
}
