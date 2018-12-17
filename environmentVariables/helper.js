const requestHandler = (request, response) => {
    console.log("Request is hitting SERVER", request.headers.host);
    response.end("hello");
  }
module.exports = {requestHandler}