const http = require("http");
const path = require("path");
const fs = require("fs");
const request = require("request");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

let location = "New Delhi";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.API_KEY}`;

const server = http.createServer((req, res) => {
  request(url, (err, _res, body) => {
    const data = JSON.parse(body);

    const name = data.name;
    const currTemp = data.main.temp;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1 style='color: red'>${name}: ${currTemp}*C</h1>`, "utf8");
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
