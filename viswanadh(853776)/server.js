var express = require("express");
var ObjectID = require("mongodb").ObjectID;
var mongoclient = require("mongodb").MongoClient;
var bodyparser = require("body-parser");
var jwt = require("jsonwebtoken");
var expapp = express();
const url = "mongodb://localhost:27017";
var db;
let token = null;
expapp.use(bodyparser.urlencoded({ extended: false }));
mongoclient.connect(url, { useUnifiedTopology: true }, (err, mdb) => {
  if (err) {
    console.log(err);
  } else {
    db = mdb.db("PROJECT");
  }
});
/*ACCESSING BOOKS */ 
expapp.post("/api/products/getProducts", (req, res) => {
  db.collection("BOOKS")
    .find()
    .toArray((err, products) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }

      res.status(200).json({ success: true, products });
    });
});


/*ACCESSING SINGLE BOOK */
expapp.get("/api/book/book_by_id", (req, res) => {
  let type = req.query.type;
  let bookId = req.query.id;

  db.collection("BOOKS").findOne({ _id: ObjectID(bookId) }, (err, product) => {
    if (err) {
      return res.status(400).json({ success: false,  });
    }

    res.status(200).json({ success: true, product });
  });
});

/*ADD TO CART */
expapp.post("/api/addtocart", (req, res) => {
  let dup = false;
  console.log(req.query);
  db.collection("users").findOne(
    { _id: ObjectID(req.query.userid) },
    (err, user) => {
      user.cart.forEach((e) => {
        console.log(e);
        if (e.id === req.query.bookid) {
          dup = true;
          res.status(300).json({ success: false });
        }
      });
      if (dup == false) {
        db.collection("users").updateOne(
          { _id: ObjectID(req.query.userid) },
          {
            $push: {
              cart: {
                id: req.query.bookid,
                name: req.query.name,
                image: req.query.image,
                price: req.query.price,
                qty:1
              },
            },
          },
          { new: true },
          () => {
            res.status(300).json({ success: true });
          }
        );
      }
    }
  );
});
/* ADD TO WISHLIST */
expapp.post("/api/addtowishlist", (req, res) => {
  let dup = false;
  console.log(req.query);
  db.collection("users").findOne(
    { _id: ObjectID(req.query.userid) },
    (err, user) => {
      user.wishlist.forEach((e) => {
        console.log(e);
        if (e.id === req.query.bookid) {
          dup = true;
          res.status(300).json({ success: false });
        }
      });
      if (dup == false) {
        db.collection("users").updateOne(
          { _id: ObjectID(req.query.userid) },
          {
            $push: {
              wishlist: {
                id: req.query.bookid,
                name: req.query.name,
                image: req.query.image,
                price: req.query.price,
              },
            },
          },
          { new: true },
          () => {
            res.status(300).json({ success: true });
          }
        );
      }
    }
  );
});

expapp.get("/auth", (req, res) => {
  if (token == null) res.json({ success: false });
  else res.json({ success: true });
});
/*USER LOGIN */
expapp.post("/api/login", (req, res) => {
  console.log(req.query);
  db.collection("users").findOne(
    { emailid: req.query.emailid },
    (err, user) => {
      if (err) {
        return res.status(400).json({ success: false, err: "user not found" });
      }
      console.log(user);
      if (user.password == req.query.password) {
        const payload = { _id: user._id };
        let token = jwt.sign(payload, "secret", { expiresIn: 1440 });
        res.status(200).json({ success: true, token });
      } else {
        res.status(400).json({ success: false, err: "password mis match" });
      }
    }
  );
});
/*ACCESSING CART ITEMS */
expapp.get("/api/cart", (req, res) => {
  console.log(req.query);
  db.collection("users").findOne(
    { _id: ObjectID(req.query.id) },
    (err, user) => {
      if (err) {
        res.json({ success: false });
      } else {
        res.json({ success: true, cart: user.cart });
      }
    }
  );
});
/*ACCESSING WISHLIST */
expapp.get("/api/wishlist", (req, res) => {
  console.log(req.query);
  db.collection("users").findOne(
    { _id: ObjectID(req.query.id) },
    (err, user) => {
      if (err) {
        res.json({ success: false });
      } else {
        res.json({ success: true, wishlist: user.wishlist });
      }
    }
  );
});
/*ACCESSING PROFILE */
expapp.get("/api/profile", (req, res) => {
  console.log(req.query);
  db.collection("users").findOne(
    { _id: ObjectID(req.query.id) },
    (err, user) => {
      if (err) {
        res.json({ success: false });
      } else {
        res.json({ success: true, user: user });
      }
    }
  );
});
/*REMOVE FROM CART */
expapp.delete("/api/removefromcart", (req, res) => {
  console.log(req.query);
  db.collection("users").findOneAndUpdate(
    { _id: ObjectID(req.query.id) },
    { $pull: { cart: { id: req.query.bookid } } },
    (err, user) => {
      if (err) {
        res.status(400).json({ success: false });
      } else {
        db.collection("users").findOne(
          { _id: ObjectID(req.query.id) },
          (err, user) => {
            if (err) {
              res.json({ success: false });
            } else {
              res.json({ success: true, cart: user.cart });
            }
          }
        );
      }
    }
  );
});
expapp.delete("/api/removeallfromcart", (req, res) => {
  console.log(req.query);
  db.collection("users").findOneAndUpdate(
    { _id: ObjectID(req.query.id) },
    { $set: { cart: [] } },
    (err, user) => {
      if (err) {
        res.status(400).json({ success: false });
      } else {
        db.collection("users").findOne(
          { _id: ObjectID(req.query.id) },
          (err, user) => {
            if (err) {
              res.json({ success: false });
            } else {
              
              res.json({ success: true, cart: user.cart });
            }
          }
        );
      }
    }
  );
});
/*REMOVE FROM WISHLIST */
expapp.delete("/api/removefromwishlist", (req, res) => {
  console.log(req.query);
  db.collection("users").findOneAndUpdate(
    { _id: ObjectID(req.query.id) },
    { $pull: { wishlist: { id: req.query.bookid } } },
    (err, user) => {
      if (err) {
        res.status(400).json({ success: false });
      } else {
        db.collection("users").findOne(
          { _id: ObjectID(req.query.id) },
          (err, user) => {
            if (err) {
              res.json({ success: false });
            } else {
              res.json({ success: true, wishlist: user.wishlist });
            }
          }
        );
      }
    }
  );
});

expapp.listen(8081, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("port no 8081");
  }
});
