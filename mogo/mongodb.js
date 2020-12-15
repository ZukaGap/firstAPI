//  CRUD create read update delete
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "test";

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log("unable to connect to database !");
    }

    const db = client.db(databaseName);
    // create single insertion
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Alex",
    //     age: 19,
    //   },
    //   (error, result) => {
    //     if (error) return console.log("Error unable to insert user!");

    //     console.log(result.ops);
    //   }
    // );

    // create multiple insertion
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Alex",
    //       age: 19,
    //     },
    //     {
    //       name: "Alex",
    //       age: 19,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Error unable to insert user!");

    //     console.log(result.ops);
    //   }
    // );

    // read single
    // db.collection("users").findOne(
    //   { _id: new ObjectID("5fd1f44d20244829d4129b63") },
    //   (error, task) => {
    //     console.log(task);
    //   }
    // );

    // update single object
    // const updatePromise = db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("5fd1f44d20244829d4129b63"),
    //   },
    //   {
    //     $set: {
    //       name: "Gela",
    //     },
    //     $inc: {
    //       age: 1,
    //     },
    //   }
    // );
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // delete single object
    // db.collection("users")
    //   .deleteMany({
    //     age: 19,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
