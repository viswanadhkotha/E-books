var express = require("express");
var mongoclient = require("mongodb").MongoClient;
//Cross-Origin Resource Sharing (CORS) - that allows cross-domain communication from the browser.
var cors = require('cors');
var bodyparser = require("body-parser");
var expapp = express();
const url = "mongodb://localhost:27017";
var db;

expapp.use(cors())
expapp.use(bodyparser.urlencoded({ extended: false }));
mongoclient.connect(url, { useUnifiedTopology: true }, (err, mdb) => {
  if (err) {
    console.log(err);
  } else {
    db = mdb.db("OnlineBookStore");
  }
});
//Query for retrieving all books
expapp.get("/api/Books", (req, res) => {
  db.collection("Books")
    .find()
    .sort({ "PUBLISHEDDATE": -1 })
    .toArray((err, result) => {
      console.log(result);
      res.json(result);
    });
});
//Query for retrieving books based on category
expapp.get("/api/Books/CATEGORY", (req, res) => {
  let cat = req.query.CATEGORY;
  console.log('cat', cat);
  var query = { CATEGORY: cat };
  db.collection("Books").find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log('result : ', result);
    res.status(200).json({ success: true, result });
  });
});
//Query for retrieving Most Popular Books 
expapp.get("/api/Books/NAME", (req, res) => {
  var query = { RATING: { $gt: 3 } }
  db.collection("Books").find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log('result : ', result);
    res.status(200).json({ success: true, result });
  });
});
//Query for retrieving New Relesed books
expapp.get("/api/Books/NEW", (req, res) => {
  var query = { "PUBLISHEDYEAR": { $gt: 2019 } }
  db.collection("Books")
    .find(query).toArray((err, result) => {
      if (err) throw err;
      console.log('result : ', result);
      res.status(200).json({ success: true, result });
    });
});;
//Query for retrieving Mixed Collections list books
expapp.get("/api/Books/MIXED", (req, res) => {
  db.collection("Books")
    .find().toArray((err, result) => {
      if (err) throw err;
      console.log('result : ', result);
      res.status(200).json({ success: true, result });
    });
});;
//query for retrieving books based on Author
expapp.get("/api/Books/AUTHOR", (req, res) => {
  db.collection("Books")
    .find().sort({ "AUTHOR": -1 }).toArray((err, result) => {
      if (err) throw err;
      console.log('result : ', result);
      res.status(200).json({ success: true, result });
    });
});;
//Query for retrieving books based on search list
expapp.get("/api/Books/BOOKNAME", (req, res) => {
  let book = req.query.NAME;
  console.log('book', book);
  var query = { "NAME": book };
  db.collection("Books").find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log('result : ', result);
    res.status(200).json({ success: true, result });
  });
});

expapp.listen(3002, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(" Running on port  3002");
  }
});