const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const exp = express();
const PORT = process.env.PORT || 5000;

//let query = "computer+science";

const url = "http://example.python-scraping.com/";

let results = [];

//first, we want to get the response data froma certain website
//axios returns a promise
axios(url)
  .then((res) => {
    //now, we can use cheerio to load the html
    const $ = cheerio.load(res.data);

    $("td").each((element) => {
      console.log($(this).children);
      const name = $(this).find("img").text();
      const link = $(this).find("a").attr("href");

      console.log("Match!");
      console.log(name, link);
      //results.push({ title, url });
    });
  })
  //.then(() => console.log(results))
  .catch((err) => {
    console.log(err);
  });

exp.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
exp.get("/favicon.ico", (req, res) => res.status(204));
