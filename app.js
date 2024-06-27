import { app, query, errorHandler } from "mu";
import request from "request";

app.get("/", function (req, res) {
  request(req.query.url, function (error, response, body) {
    if (error) {
      res.status(500).send("Error fetching the URL");
      return;
    }

    const headers = { ...response.headers };

    if (!headers["link"]) {
      headers["link"] =
        '<https://example.com/context.jsonld>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"';
    }

    res.set(headers);
    res.status(response.statusCode).send(body);
  });
});
